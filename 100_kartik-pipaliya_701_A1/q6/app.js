const fs = require('fs');
const util = require('util');
const readline = require('readline');


const unlinkPromise = util.promisify(fs.unlink);


async function deleteFile(filePath) {
  try {
    await unlinkPromise(filePath);
    console.log(`File "${filePath}" deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file "${filePath}":`, err.message);
  }
}


deleteFile('test.txt');
