

const fs = require('fs');

// create or rewrite
fs.writeFileSync('example.txt', 'This is the first line.\n');
console.log('✅ File created with initial content.');

// apending content 
fs.appendFileSync('example.txt', 'This is an added line.\n');
console.log('✅ Content appended to file.');

// reading and dislpaying 
const content = fs.readFileSync('example.txt', 'utf8');
console.log('📄 File content:\n' + content);

//rename file
fs.renameSync('example.txt', 'renamed_example.txt');
console.log('🔁 File renamed to renamed_example.txt');

//file deletion 
// fs.unlinkSync('renamed_example.txt');
// console.log('🗑️ File deleted.');
