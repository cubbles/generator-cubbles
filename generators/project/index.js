'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var sh = require('shelljs');

module.exports = yeoman.generators.Base.extend({

    initializing: function() {
    },
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the neat ' + chalk.red('Cubbles WebPackage') +
            ' generator!' +
            '\n\n This will create a "cubbles" project into a new or existing sub-folder of your choice.'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'projectFolder',
                message: 'Please provide a folder name: '
            }
        ];

        this.prompt(prompts, function(props) {
            this.props = props;
            // To access props later use this.props.someOption;
            done();
        }.bind(this));
    },

    configuring: {},

    writing: {
        folder: function() {
            sh.mkdir(this.props.projectFolder);
            sh.cd(this.props.projectFolder);
        },

        webpackage: function() {
            this.fs.copyTpl(
                this.templatePath('%README.md'),
                this.destinationPath('README.md'),
                this.props
            );

            /** Now copy all the other stuff.
             * @see https://github.com/isaacs/node-glob#options
             */
            var templatePath = this.templatePath();
            this.fs.copy(
                this.templatePath('./**/*'),
                this.destinationRoot(), {
                    globOptions: {
                        dot: true,
                        ignore: [templatePath + '/**/%*']
                    }
                }
            );
        }
    },

    install: function() {
        this.log('\nInstalling DevTools dependencies ...');
        this.spawnCommandSync('npm', ['install'], {cwd: 'devtools'});
    },

    end: function() {
        this.log(yosay(
            'Done'
        ));
        this.log(
            'Note: Within the \'devtools\' folder, type \'grunt\' to get a list of the most important tasks.\n\n'
        );
        this.log(
            'Now I\'m running grunt the first time:'
        );
        this.spawnCommandSync('grunt', [], {cwd: 'devtools'});

        //PLAT-370: exit process here.
        // Yeoman seems to have a bug processing the async-operation in 'prompting' correctly.
        process.exit(0);
    }
});
