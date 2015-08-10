/**
 * Jekyllbase
 * MIT 2015 Urban Sanden
 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });