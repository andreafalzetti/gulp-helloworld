const fs = require('fs');
const { src, dest } = require('gulp');
const File = require('vinyl');

var jsFile = new File({
    cwd: '/',
    base: '/test/',
    path: '/test/file.js',
    contents: Buffer.from('var x = 123')
});

exports.default = function () {
    const dir = 'vscode.github-authentication-dummy';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // extension.js

    return src('src/*.js')
        .pipe(src('vendor/*.js'))
        .pipe(src(jsFile))
        .pipe(dest('output/'));
}