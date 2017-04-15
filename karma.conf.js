'use strict';

module.exports = function(config) {
    config.set({
        files: [
            {
                pattern: 'demos/sample-data/*.json',
                included: false
            },
            'node_modules/jquery/dist/jquery.js',
            'node_modules/lodash/lodash.js',
            'node_modules/inspire-tree/dist/inspire-tree.js',
            'build/inspire-tree-dom.js',
            'test/helpers.js',
            'test/*/*.spec.js'
        ],
        autoWatch: false,
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon-chai', 'es6-shim'],
        customLaunchers: {
            chromeTravisCI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        browsers: [process.env.TRAVIS ? 'chromeTravisCI' : 'Chrome'],
        port: 9876,
        preprocessors: {
            'build/inspire-tree.js': ['coverage']
        },
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: './coverage/',
            subdir: 'karma'
        },
        singleRun: true
    });
};
