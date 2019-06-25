const fs = require("fs");
const sass = require('node-sass');
const watch = require('node-watch'); // fs.watch 会重复触发所以用这个

function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

function compileFile(filename, suffix) {
    
    const outFilename = filename.replace('.scss', `.${suffix}`);

    // console.log('filename: ' + filename);
    // console.log('outFilename: ' + outFilename);

    sass.render({
        file: filename,
        outFile:outFilename,
    }, (err, result) => {
        if (err) {
            return console.log(err);
        } 

        fs.writeFile(outFilename, result.css, err => {
            if (err) {
                return console.error(err);
            }
            console.log(`compile done ! => ${getDate()}`)
        })
    });
}

function fileWather(rootPath, suffix) {
    watch(rootPath,{
        encoding: 'utf-8',
        recursive: true, // 监听子文件夹
        persistent: true, // 持续监听
        filter: /\.scss/
    },(eventType, filename) => {
        if (eventType === 'update') {
            compileFile(filename, suffix);
        }
    })
}

module.exports = fileWather;