const path = require('node:path');

console.log(path.basename(__dirname)); // path_module
console.log(path.basename(__filename)); // index.js
console.log(path.extname(__filename)); // extension of filename
console.log(path.parse(__filename)); // object with properties like root, dir, base, ext, name
console.log(path.format(path.parse(__filename))); // Original filename
console.log(path.isAbsolute(__filename)); // true if absolute
console.log(path.isAbsolute('./data.json')); // false as it's relative
console.log(path.join('folder1', 'folder2', 'index.html')); // join and normalized the resulting path
console.log(path.resolve('folder1', 'folder2', 'index.html')) // resolves sequence of path segments to an absolute path

/*
path_module
index.js
.js
{
    root: 'C:\\',
    dir: 'C:\\Users\\Atul8.Kumar\\OneDrive - Reliance Corporate IT Park Limited\\Documents\\MERN\\Back-End\\Programs\\path_module',
    base: 'index.js',
    ext: '.js',
    name: 'index'
}
C:\Users\Atul8.Kumar\OneDrive - Reliance Corporate IT Park Limited\Documents\MERN\Back-End\Programs\path_module\index.js
true
false
folder1\folder2\index.html
C:\Users\Atul8.Kumar\OneDrive - Reliance Corporate IT Park Limited\Documents\MERN\Back-End\Programs\path_module\folder1\folder2\index.html
*/
