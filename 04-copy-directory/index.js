const fs = require('fs/promises');
const path = require('path');



async function go(){
    await fs.rm((path.join(__dirname, 'files-copy')), { recursive:true, force: true}, err => {
        if(err) throw err;
    });

    await fs.mkdir(path.join(__dirname, 'files-copy'),{ recursive: true }, err => {
        if (err) throw err;
    });

    const arrFiles = await fs.readdir(path.join(__dirname, 'files'));
    
    for(let file of arrFiles){
        await fs.copyFile((path.join(__dirname, 'files', file)), (path.join(__dirname, 'files-copy', file)));
    }
}
go();