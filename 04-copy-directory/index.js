const path = require('path');
let fs = require('fs');

fs.readdir(__dirname, (err, data) => {
    let hasCopy = data.includes('files-copy'); 
    if(!hasCopy){
        fs.mkdir(path.join(__dirname, 'files-copy'), err => {
            if (err) throw err;
        });
        fs.readdir(path.join(__dirname, 'files'), (err, data) => {
            data.forEach(file => {
                fs.copyFile((path.join(__dirname, 'files', file)), (path.join(__dirname, 'files-copy', file)), err => {
                    if(err) throw err; // не удалось скопировать файл
                    console.log('Файл успешно скопирован');
                 });
            })
        })

    } else if (hasCopy) {
        fs.rmSync((path.join(__dirname, 'files-copy')), { recursive:true }, err => {
            if(err) throw err; // не удалось удалить папку
        });
        fs.mkdirSync(path.join(__dirname, 'files-copy'), err => {
            if (err) throw err;
        });
        fs.readdir(path.join(__dirname, 'files'), (err, data) => {
            data.forEach(file => {
                fs.copyFile((path.join(__dirname, 'files', file)), (path.join(__dirname, 'files-copy', file)), err => {
                    if(err) throw err; // не удалось скопировать файл
                    console.log('Файл успешно скопирован');
                 });
            })
        })
    }
})
