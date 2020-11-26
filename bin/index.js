#!/usr/bin/env node

/**
 * 判断 node 版本
 */
var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];
if (major < 10) {
    console.error(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        'rct requires Node 10 or higher. \n' +
        'Please update your version of Node.'
    );
    process.exit(1);
}

const { init } = require('./main');
init();