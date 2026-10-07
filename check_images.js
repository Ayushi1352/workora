const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(file));
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
        results.push(file);
      }
    });
  } catch (e) {}
  return results;
}

const files = [...getFiles('./components'), ...getFiles('./app'), './site.json'];
const imgRegex = /["'](\/[a-zA-Z0-9_\-]+\.(?:webp|png|jpg|jpeg|svg))["']/g;

const foundImages = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    foundImages.add(match[1]);
  }
});

console.log('Images referenced across components & site.json:');
let allOk = true;
foundImages.forEach(img => {
  const localPath = path.join('./public', img.replace(/^\//, ''));
  const exists = fs.existsSync(localPath);
  const size = exists ? fs.statSync(localPath).size : 0;
  if (!exists || size === 0) {
    console.log('[MISSING / ZERO SIZE]: ' + img);
    allOk = false;
  } else {
    console.log('[OK] ' + img + ' (' + size + ' bytes)');
  }
});

if (allOk) {
  console.log('\nAll referenced images exist and have non-zero size!');
}
