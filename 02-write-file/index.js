const path = require('path');
const fs = require('fs');
const {stdin, stdout} = process;

const output = fs.createWriteStream(path.join(__dirname, 'notes.txt'), 'utf-8');
stdout.write('Hi, enter text please \n');
stdin.on('data', data => {
    if(data.toString().trim() === 'exit'){
        stdout.write('Thank you, goodbye!');
        process.exit();
    } else {
        output.write(data);
    }
});

process.on('SIGINT', () => {
    stdout.write('Thank you, goodbye!');
    process.exit();
});


