const fs = require('fs');
const unzipper = require('unzipper');

function extractZip(zipPath, outputFolder) {
  fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: outputFolder }))
    .on('close', () => {
      console.log(`Extraction complete! Files extracted to ${outputFolder}`);
    })
    .on('error', (err) => {
      console.error('Error during extraction:', err);
    });
}


extractZip('zipped.zip', 'extractedFolder');
