const fs = require('fs');
const path = require('path');
const ask = require('./terminalQuestion');
const fileUtils = require('./fileUtils');


// ask('Who are you', ['Micke', 'Annika', 'Johnny'], 'Annika').then((answer) => {console.log(`answer = ${answer}`) }, () => { });

// const file = fs.readFileSync(path.resolve(__dirname, './questions/file1.js'));
// const options = { flag : 'w' };

// fs.writeFile(path.resolve(__dirname, './trainingFile.js'), file, options, (err) => {
//     console.log(err);
// })

function askLoop(rootList, root, category, currentFile) {
    console.log('in askLoop');
    if (!root || category === '...') {
        ask('Chapter', rootList, '').then((answer) => {askLoop(rootList, answer, undefined, undefined)}, (err) => {console.log('in Error')})
    } else if (!category || currentFile === '...') {
        fileUtils.getDirectoriesFromDir(path.resolve(__dirname, './questions/' + root)).then(
            (folders) => {
                const answers = ['...', ...folders];
                ask('Category', answers, '').then(
                    (answer) => {
                        askLoop(rootList, root, answer, undefined);
                    }
                )
            },
            (err) => {

            }
        )
    } else {
        fileUtils.getFilesFromDir(path.resolve(__dirname, './questions/' + root + '/' + category), '.js').then(
            (folders) => {
                const answers = ['...', ...folders];
                ask('Practice', answers, '').then(
                    (answer) => {
                        if (answer === '...') {
                            askLoop(rootList, root, '...', undefined);
                        } else {
                            const fileName = path.resolve(__dirname, `./questions/${root}/${category}/${answer}`);
                            console.log(fileName);
                            const file = fs.readFileSync(fileName);
                            const options = { flag : 'w' };
                            console.log(`file = ${file}`);

                            fs.writeFile(path.resolve(__dirname, './trainingFile.js'), file, options, (err) => {
                                console.log(err);
                            });
                            askLoop(rootList, root, category, undefined);
                        }
                    }
                )
            },
            (err) => {
                console.log(err);
            }
        )
    }
}

async function init() {
    console.log('in init');
    try {
        const rootDir = await fileUtils.getDirectoriesFromDir(path.resolve(__dirname, './questions'));
        console.log(`rootdir ${rootDir}`);
        askLoop(rootDir, undefined, undefined, undefined);
    } catch (e) {
        console.log(`error: ${e}`);
    }
}

init();