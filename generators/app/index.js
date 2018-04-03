'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the neat ' + chalk.red('Cubbles WebPackage-Project-Generator') +
      '\nType' + '\n$ yo cubbles:project' + '\n to create a new cubbles-project.'
    ));
    done();
  }
};
