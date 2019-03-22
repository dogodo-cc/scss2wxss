#! /usr/bin/env node

// 第一句话表示用node执行这个文件

const fs = require("fs");
const path = process.cwd();
const fileWatcher = require("../index.js");

let run = (suffix = 'wxss') => {
    
    fs.readdir(path, err => {
        if (err) {
            return console.error(err);
        }
        fileWatcher(path, suffix);
    })

    console.log(`project path is : ${path}`)
    console.log(`change .scss file to ${suffix}.`);
}
run(process.argv.slice(2)[0]);


