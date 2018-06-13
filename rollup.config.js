// Libs
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import gzip from 'rollup-plugin-gzip';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import path from 'path';
import { uglify } from 'rollup-plugin-uglify';

// Read package config
const pkgConfig = require('./package.json');

// Constants
const DIST = process.env.DIST || false;
const MIN = process.env.MIN || false;

var banner = `/* Inspire Tree DOM
 * @version ${pkgConfig.version}
 * ${pkgConfig.repository}
 * @copyright Copyright 2015 Helion3, and other contributors
 * @license Licensed under MIT
 *          see ${pkgConfig.repository}/blob/master/LICENSE
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
    })
];

if (MIN) {
    plugins.push(uglify({
        output: {
            comments: /@license/
        }
    }));
    plugins.push(gzip());
}

export default {
    input: path.join('src', 'dom.js'),
    external: ['lodash', 'InspireTree', 'inspire-tree'],
    output: {
        file: path.join(DIST ? 'dist' : 'build', 'inspire-tree-dom' + (MIN ? '.min' : '') + '.js'),
        format: 'umd',
        banner: banner,
        name: 'InspireTreeDOM',
        globals: {
            'inspire-tree': 'InspireTree',
            lodash: '_'
        }
    },
    plugins: plugins
};
