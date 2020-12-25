#!/usr/bin/env node

const sharp = require('sharp');

function printHelp() {
    console.log('arguments: srcFile dstFile');
    console.log('supports reading JPEG, PNG, WebP, TIFF, GIF and SVG images.');
    console.log('output images can be in JPEG, PNG, WebP and TIFF formats.');
}

const main = async () => {
    if (process.argv.length < 3) {
        printHelp();
        return;
    }

    try {
        const srcFile = process.argv[2];
        const image = sharp(srcFile);
        const meta = await image.metadata();
        console.log(meta);
        if (process.argv.length < 4) {
            return;
        }

        const dstFile = process.argv[3];
        const info = await image.toFile(dstFile);
        console.log('---------- target ----------');
        console.log(info);
    } catch (err) {
        console.error(err);
    }
};

main();
