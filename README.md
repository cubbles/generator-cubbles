# Yeoman generator for Cubbles-WebPackages


## Introduction
The generators provide a scaffolding using [Yeoman](http://yeoman.io) (a scaffolding tool for the web).
It lets you easily create and customize Cubbles (custom) web packages via the command line. This saves you time writing boilerplate code so you can start writing up the logic to your components straight away.

## Features
* Scaffolding Cubbles-WebPackages
* Prompting for the most important config-values
* Validation of user input values.


## Installation

1. The Yeoman package. Install it if it is not already on your system: `npm install -g yo`
2. Install the Yeoman generator for Cubbles-WebPackages: `npm install -g https://npm.webblebase.net:444/generator-cubbles/-/generator-cubbles-<version>.tgz`


## Scaffold a Cubbles-Project

1. Change into the directory the project folder should be created in.
2. Scaffold a new Cubbles-WebPackage: `yo cubbles:project`

## Available Generators
* `yo cubbles`: Lists available generators.
* `yo cubbles:project`: Sets up a new Cubbles-Project.

## Use the DevTools
The generated project comes with the **Coder-Development-Tools (DevTools)**.

Some notes on how to deal with this:

1. The DevTools are part of your project, so we recommend to include the `devtools` -subfolder into your _source-control-management_.
2. The DevTools are yours. You are free to _modify structure and tasks to your needs_.
3. The DevTools are managed within a dedicated git-Repository. If you want to _stay up-to-date with the latest changes_, map the IDE-Git-Repo into your WebPackage-Project using the Git-Subtree-Feature (HowTo: [de](https://git-scm.com/book/de/v1/Git-Tools-Subtree-Merging)/[en](https://git-scm.com/book/en/v1/Git-Tools-Subtree-Merging))

## License
MIT <http://opensource.org/licenses/MIT>
