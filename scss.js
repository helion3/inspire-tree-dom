#!/usr/bin/env node

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var sass = require('node-sass');
var zlib = require('zlib');

// Constants
const DIST = process.env.DIST || false;
const MIN = process.env.MIN || false;
const themes = ['light', 'dark'];

themes.forEach((theme) => {
    // Read contents

    sass.render({
        file: path.join(__dirname, 'src', 'scss', theme + '.scss')
    }, function(err, result) {
        if (err) {
            throw err;
        }

        postcss([autoprefixer({ targetBrowsers: ['last 2 versions'] })]).process(result.css.toString()).then(postResult => {
            var writeCSS = (css, gzip) => {
                var filepath = path.join(DIST ? 'dist' : 'build', 'inspire-tree-' + theme + (MIN ? '.min' : '') + '.css');
                fs.writeFile(filepath, css, (err) => {
                    if (err) {
                        throw err;
                    }
                });

                if (gzip) {
                    zlib.gzip(css, (zlibErr, res) => {
                        if (zlibErr) {
                            throw zlibErr;
                        }

                        fs.writeFile(filepath + '.gz', res, (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    });
                }
            };

            if (MIN) {
                cssnano.process(postResult.css, { zIndex: false }).then((minifyResult) => {
                    writeCSS(minifyResult.css, true);
                });
            }
            else {
                writeCSS(postResult.css);
            }
        });
    });
});
