/*
 * @Author: kingweicai 
 * @Date: 2019-05-16 16:18:46 
 * @Last Modified by: kingweicai
 * @Last Modified time: 2019-06-15 10:52:35
 */
const path = require('path');

const testSuit = {
  name: 'suit15',
  compilerConfig: {
    cmd: ['-d', '-cc', '0', '-gn', '$gwx'],
    'FILESBASE': path.join(__dirname, './proj'),
    outputDir: path.join(__dirname, './out'),
    'FILES': [
      './index.wxml'
    ]
  },
  wccError: '',
  wccError: ''
};

module.exports = testSuit;