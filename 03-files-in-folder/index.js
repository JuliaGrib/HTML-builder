const path = require('path');
const fs = require('fs');


fs.readdir(path.join(__dirname, './secret-folder'), (err, data) => {
    data.forEach(file => {
        if (fs.statSync(path.join(__dirname, 'secret-folder', file)).isFile()) {
            let name = path.basename(file);
            let dot = name.indexOf('.');
            let permission = path.extname(file);
            let size = fs.statSync(path.join(__dirname, 'secret-folder', file)).size;
            console.log(`${name.slice(0, dot)} - ${permission.slice(1)} - ${size/ 1024}kb`);
        }
    })
});

