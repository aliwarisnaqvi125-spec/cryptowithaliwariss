const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const zipPath = path.join(process.cwd(), 'FINAL_WORKING_SITE.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log('✅ Deployment package created: FINAL_WORKING_SITE.zip');
    console.log('📦 Size: ' + (archive.pointer() / 1024 / 1024).toFixed(2) + ' MB');
});

archive.on('error', (err) => { throw err; });

archive.pipe(output);

// Manual walk to ensure forward slashes
function walk(dir, base = '') {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const name = base ? (base + '/' + file) : file;
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, name);
        } else {
            archive.append(fs.createReadStream(fullPath), { name });
        }
    }
}

walk('out');
archive.finalize();
