// Libs
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import fs from 'fs';
import gzip from 'rollup-plugin-gzip';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import path from 'path';
import postcss from 'postcss';
import scss from 'rollup-plugin-scss';
import uglify from 'rollup-plugin-uglify';
import zlib from 'zlib';

// Read package config
const pkgConfig = require('./package.json');

// Constants
const DIST = process.env.DIST || false;
const MIN = process.env.MIN || false;

var banner = `/* Inspire Tree DOM v${pkgConfig.version}
 * ${pkgConfig.repository}
 * Copyright 2015 Helion3, and other contributors
 * Licensed under MIT. ${pkgConfig.repository}/blob/master/LICENSE
 */`;

let plugins = [
    replace({
        'process.env.NODE_ENV': JSON.stringify(DIST ? 'production' : 'development')
    }),
    babel({
        exclude: [
            'node_modules/**',
            'src/scss/**'
        ]
    }),
    nodeResolve({
        jsnext: true
    }),
    commonjs({
        sourceMap: false,
        namedExports: {
            'node_modules/inferno/index.js': ['render']
        }
    }),
    scss({
        output: (styles) => {
            postcss([autoprefixer({ targetBrowsers: ['last 2 versions'] })]).process(styles).then(postResult => {
                var writeCSS = (css, gzip) => {
                    var filepath = path.join(DIST ? 'dist' : 'build', 'inspire-tree' + (MIN ? '.min' : '') + '.css');
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
        }
    })
];

if (MIN) {
    plugins.push(uglify());
    plugins.push(gzip());
}

export default {
    entry: path.join('src', 'dom.js'),
    dest: path.join(DIST ? 'dist' : 'build', 'inspire-tree-dom' + (MIN ? '.min' : '') + '.js'),
    format: 'umd',
    moduleName: 'InspireTreeDOM',
    external: ['lodash', 'InspireTree', 'inspire-tree'],
    banner: banner,
    globals: {
        lodash: '_'
    },
    plugins: plugins
};
