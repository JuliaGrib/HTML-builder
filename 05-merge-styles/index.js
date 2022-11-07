const path = require('path');
const fs = require('fs');
const {rm, readdir} = require('fs/promises');


let styles = path.join(__dirname, 'styles');
let bundle = path.join(__dirname, 'project-dist', 'bundle.css');

async function makeBundle(styles, bundle) {
    await rm(bundle, {force: true});

    let files = (await readdir(styles)).filter(file => path.extname(path.join(styles, file)) === '.css');

        files.forEach(file => {

            let copyCSS = fs.createReadStream(path.join(styles, file), 'utf-8');

            copyCSS.pipe(fs.createWriteStream(bundle, {flags: 'a'}));
        });
    }
makeBundle(styles, bundle);