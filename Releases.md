# Releases:

## Version 2.3.0
* use cubbles-coder-devtools version "devtools-2.3.0"

## Version 2.2.0
* use cubbles-coder-devtools version "devtools-2.2.0"


##Version 2.1.0
* use cubbles-coder-devtools version "devtools-2.1.0"


## Version 2.0.1
* use cubbles-coder-devtools version "devtools-2.0.1"

## Version 2.0.0
 * PLAT-129/PLAT-396:
    * cubx-webpackage-upload automatically asks for commandline input of user and password-values.
    * use version "devtools-2.0.0"
 * use cubx-grunt-webpackage-scaffold to version v2.0.0
    * use cubx.core.rte@1.5.0

## Version 1.11.0
* devtools updated (Version 1.13.0)
* use cubx.core.rte@1.4.0

## Version 1.10.3
* devtools updated (Version 1.12.2)

## Version 1.10.2
* "cubixx" changed to "cubbles"

## Version 1.10.1
* devtools updated (Version 1.12.1)

## Version 1.10.0
* devtools updated (Version 1.12.0)

## Version 1.9.5
* devtools updated (Version 1.11.2)

## Version 1.9.4
* devtools updated (Version 1.11.1)

## Version 1.9.3
* devtools updated (Version 1.11.0)

## Version 1.9.2
* devtools updated (Version 1.10.2)

## Version 1.9.1
* devtools updated (Version 1.10.1)

## Version 1.9.0
* devtools updated (Version 1.10.0)

## Version 1.8.1
* devtools updated (Version 1.9.1)

## Version 1.8.0
* devtools updated (Version 1.9.0)

## Version 1.7.1
* devtools updated (Version 1.8.1)

## Version 1.7.0
* devtools updated (Version 1.8.0)

## Version 1.6.0
* devtools updated (Version 1.7.0)

## Version 1.5.0
* devtools updated (Version 1.6.0)

## Version 1.4.0
* devtools updated (Version 1.4.0)

## Version 1.3.0
* modelVersion 8.1
* devtools updated

## Version 1.2.0
* devtools updated

## Version 1.1.0
* included cubx-grunt-webpackage-scaffold version 1.0.0

## Version 1.0.0
* Supports ModelVersion-8 (only)
    * Yeoman new generates a cubixx-project only. Scaffolding of webpackages is done via grunt-tasks to be executed within
 the project.

## Version 0.9.1
* Merged Branches

## Version 0.9
* for modelVersion 7.0.0
* PLAT-200 - Initialization for compound components

### Bugfix
* BugFix formatting js/polyfill_ie.js
* BugFix validateSource for cubixx:webutil (no cliesnt code validation)
* BugFix included path modul in tasks/config/deployjs for  cubixx:webutil
* BugFix formatting  tasks/config/avaiblabletasks.js cubixx:webutil, cubixx:compound , cubixx:elementary, cubixx:webapp

### Change
* install webpackage-uploader 1.3.0
* regex for people improved (cubixx:compound, cubixx:elementary, cubixx:webapp, cubixx:webutil (reason: article in ``App Developer Forum``:  Cubbles Web Package Generator sollte auch typische englische Autorennamen zulassen


## Version 0.9

* for modelVersion 7.0.0
* PLAT-200
* install webpackage-uploader 1.3.0
* regex for people improved (cubixx:compound, cubixx:elementary, cubixx:webapp, cubixx:webutil (reason: article in ``App Developer Forum``:  Cubbles Web Package Generator sollte auch typische englische Autorennamen zulassen


## Version 0.8.1

## BugFix
* PLAT-277: crc-loader url wird beim deployment nicht korrekt ersetzt


## Version 0.8.0

## Change
* PLAT-267: new task 'grunt deploy' (allows manual input of Base-Url)

## Version 0.7.0 (2015-08-19)
for modelVersion 6.0

### Change
* install webpackage-uploader locally
* update deploy task for calling the local installed webpackage-uploader  (cubixx:webapp, cubixx:webutil, cubixx:compound, cubixx:elementary)

### BugFix
* deployIntegration-config.json and deployLocal-config.json: correct attribute `root`


    "path": {
        "root": "./dist"
    }

* manifest.webpackage: korrektur the template `"authors": <%- webpackageAuthors %>` (cubixx:webapp, cubixx:webutil, cubixx:compound, cubixx:elementary)

## Version 0.6 (2015-08-06)
### Change
* PLAT-198: default version for crc (1.1) ,crcLoader (1.1) cif (1.1) and CubxPolymer (1.1) updated. (cubixx:compound, cubixx:elementary, cubixx:webapp


## Version 0.5 (2015-08-04)
### Improvement
* modelVersion 6.0 included, defailt-values CRCLoader, CRC, CIF, CubxPolymer updated (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included preinstall script to install webpackage-uploder in correct version globally
* included grunt task `validateWebpackages` (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included grunt task `validate`  (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included grunt task localhost to check urls to localhost before deployment
* groupId can include die charachters `-` and `_`.
* preinstall of webpackage-uploader-1.2.2
* limited regex pattern for name of the component: componentname should begin with a letter. Important because of registration of custom tags. (cubixx:elementary und cubixx:compound)
* included grunt task `validate` (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)


## Version 0.4.4 (2015-07-31)
### BugFix
* the dependency of cubxpolymer was not correct. (The groupId was in version 0.5 changed.)
* updated cubxpolymer version to 0.6.1 (cubixx:elementary)

## Version 0.4.3 (2015-07-28)
### BugFix
* by generate a webapp is no manifest.component necessary. manifest.component deleted.

## Version 0.4.2 (2015-07-27)
### BugFix
* correction CRCLoader version to 0.6.1

## Version 0.4.1 (2015-07-27)
### BugFix

* correction of include CRCLoader ( in the script tag in index.html included the groupId cubx.core )
* correction githooks grunt task (task `lint` renamed in `validateSources`

## Version 0.4 (2015-07-24)
### Improvement
* ready for modelVersion 5.0.0

## Version 0.3.5 (2015-07-16): Fixed PLAT-214 (grunt deployIntegration), PLAT-215 (missing .gitignore File).
## Version 0.3.4 (2015-07-14): Fixed PLAT-208 (cubixx:compound).
##* Version 0.3.3 (2015-07-14): Fixed PLAT-208 (cubixx:elementary).
##* Version 0.3.2 (2015-07-09): Fixed some generation and regex issues.
##* Version 0.3.1 (2015-07-07): Fixed some spelling issues.
##* Version 0.3.0 (2015-07-07): New `cubixx:compound` | New `cubixx:webapp`
##* Version 0.2.0 (2015-07-03): Extended `cubixx:webutil` | New `cubixx:elementary`
##* Version 0.1.0 (2015-07-01): Basic implementation of `cubixx:webutil`
