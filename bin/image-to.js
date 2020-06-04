#!/usr/bin/env node

const sharp = require('sharp');

const main = async () => {
    if (process.argv.length < 4) {
        console.log('arguments: srcFile dstFile');
        console.log('supports reading JPEG, PNG, WebP, TIFF, GIF and SVG images.');
        console.log('output images can be in JPEG, PNG, WebP and TIFF formats.');
        return;
    }

    const srcFile = process.argv[2];
    const dstFile = process.argv[3];

    try {
        const info = await sharp(srcFile).toFile(dstFile);
        console.log(info);
    } catch (err) {
        console.error(err);
    }
};

main();
