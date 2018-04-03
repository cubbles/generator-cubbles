'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
    this.versions = [
      'cubx.core.rte@3.x',
      'cubx.core.rte@2.x'
    ];
  }

  prompting () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the neat ' + chalk.red('Cubbles WebPackage') +
      ' generator!' +
      '\n\n This will create a "cubbles" project into a new or existing sub-folder of your choice.'
    ));

    let prompts = [
      {
        type: 'input',
        name: 'projectFolder',
        message: 'Please provide a folder name: '
      },
      {
        type: 'rawlist',
        name: 'version',
        message: 'Please decide for cubx.core.rte version: ',
        choices: this.versions,
        default: 0
      }
    ];

    return this.prompt(prompts).then((answers) => {
      this.props = answers;
    });
  };

  paths () {
    let rootPath = path.join(process.cwd(), this.props.projectFolder);
    this.destinationRoot(rootPath);
    if (this.props[ 'version' ] === this.versions[ 1 ]) { //
      // console.log('version', this.versions[ 1 ]);
      let templatePath = path.join(__dirname, 'templates_2x');
      this.sourceRoot(templatePath);
      // console.log('sourceRoot', this.sourceRoot());
    }
  };

  writing () {
    this._webpackage();
  };

  install () {
    this.log('\nInstalling DevTools dependencies ...');
    this.spawnCommandSync('npm', [ 'install' ], { cwd: 'devtools' });
  };

  end () {
    this.log(yosay(
      'Done'
    ));
    this.log(
      'Note: Within the \'devtools\' folder, type \'grunt\' to get a list of the most important tasks.\n\n'
    );
    this.log(
      'Now I\'m running grunt the first time:'
    );
    this.spawnCommandSync('grunt', [], { cwd: 'devtools' });

    // PLAT-370: exit process here.
    // Yeoman seems to have a bug processing the async-operation in 'prompting' correctly.
    process.exit(0);
  };

  _webpackage () {
    // console.log('webpackage');
    this.fs.copyTpl(
      this.templatePath('%README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('%.gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );

    /** Now copy all the other stuff.
     * @see https://github.com/isaacs/node-glob#options
     */
    var templatePath = this.templatePath();
    console.log('templatePath', templatePath);
    this.fs.copy(
      [this.templatePath('./**/*'), '!%*', '!**/%*'],
      this.destinationRoot(), {
        globOptions: {
          dot: true
        }
      }
    );
  };
};
