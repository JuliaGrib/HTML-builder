const path = require('path');
const fs = require('fs');


fs.readdir(path.join(__dirname, './secret-folder'), (err, data) => {
    data.forEach(file => {
        fs.stat(path.join(__dirname, 'secret-folder', file), function(err, stats) {
            if (!(stats.isDirectory())) {
                let name = path.basename(file);
                let dot = name.indexOf('.');
                let permission = path.extname(file);
                let size = stats["size"];
                console.log(`${name.slice(0, dot)} - ${permission.slice(1)} - ${size/ 1024}kb`);
                }
        });

    })
});