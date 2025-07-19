const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', { zlib: { level: 9 } }); // max compression

    output.on('close', () => {
    console.log(`✅ Folder zipped successfully: ${outPath} (${archive.pointer()} total bytes)`);
    });

  archive.on('error', err => {
    throw err;
  });

  archive.pipe(output);

  archive.directory(sourceFolder, false); 
  archive.finalize();
}

zipFolder('zippingfolder', 'zipped.zip');
