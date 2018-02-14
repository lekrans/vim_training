const fs = require('fs');
const path = require('path');

function getFilesFromDir(dir, extension, exclude) {
  return new Promise((resolve, reject) => {
    const selectedFiles = [];
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject();
        return;
      }
      files.forEach(file => {
        if (path.extname(file) === extension) {
          let acceptFile = true;
          if (exclude) {
            for (excludeFile of exclude) {
              if (excludeFile === file) {
                acceptFile = false;
                break;
              }
            }
          }
          if (acceptFile) {
            selectedFiles.push(file);
          }
        }
      });
      resolve(selectedFiles);
    });
  })
}


function getDirectoriesFromDir(folder) {
  console.log('in getDirectories from dir');
  return new Promise((resolve, reject) => {
    const dir = []
    fs.readdir(folder, (err, files) => {
      if (err) {
        reject();
        return;
      }
      files.forEach(file => {
        if (fs.statSync(path.resolve(folder, file)).isDirectory()) {
          dir.push(file);
        }
      });
      resolve(dir);
    });
  })
}

module.exports = {
  getFilesFromDir,
  getDirectoriesFromDir
}