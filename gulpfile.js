'use strict';

var gulp = require('gulp');

/**
 * Load the sample in src/app/index
 */
gulp.task('serve', ['compile'], function(done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JS 2');
    var options = {
        server: {
            baseDir: [
                './src/app/',
                './src/resource/',
                './node_modules/@syncfusion/ej2/'
            ]
        },
        ui: false
    };
    bs.init(options, done);
});

/** 
 * Compile TypeScript to JS
 */
gulp.task('compile', function(done) {
    var webpack = require('webpack');
    var webpackStream = require('webpack-stream');
    gulp.src(['./src/app/index.ts', './spec/index.spec.ts']).pipe(webpackStream({
            entry: {
                'src/app/index': './src/app/index.ts',
                'spec/index.spec': './spec/index.spec.ts'
            },
            output: {
                filename: '[name].js'
            },
            module: {
                rules: [{
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                }]
            },
            resolve: {
                extensions: [".ts", ".js"]
            }
        }, webpack))
        .pipe(gulp.dest('./'))
        .on('end', function() {
            done();
        });
});


/**
 * Testing spec files
 */
gulp.task('test', ['compile'], function(done) {
    var karma = require('karma');
    new karma.Server({
        configFile: __dirname + '/karma.conf.js'
    }, function(e) {
        done(e === 0 ? null : 'karma exited with status ' + e);
    }).start();
});