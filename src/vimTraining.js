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

function askLoop(root, category, currentFile) {
    console.log('in askLoop');
    if (!category) {
        ask('Chapter', root, '').then((answer) => {askLoop(root, answer, undefined)}, (err) => {})
    };
}

async function init() {
    console.log('in init');
    try {
        const rootDir = await fileUtils.getDirectoriesFromDir(path.resolve(__dirname, './questions'));
        console.log(`rootdir ${rootDir}`);
        askLoop(rootDir, undefined, undefined);
    } catch (e) {
        console.log(`error: ${e}`);
    }
}

init();