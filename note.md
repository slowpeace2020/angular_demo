## install

### install node and angular
1. download node pkg
2. npm install -g @angular/cli@12

### create angular app, name is my-app
ng new my-app

## String Interpolation
{{value}} on html page, define in component js

## ng serve error
'''
my-app % ng serve
⠋ Generating browser application bundles (phase: setup)...Compiling @angular/core : es2015 as esm2015
Compiling @angular/common : es2015 as esm2015
Compiling @angular/platform-browser : es2015 as esm2015
Compiling @angular/router : es2015 as esm2015
Compiling @angular/platform-browser-dynamic : es2015 as esm2015
⠹ Generating browser application bundles (phase: building)...node:internal/crypto/hash:69
this[kHandle] = new _Hash(algorithm, xofLen);
^

Error: error:0308010C:digital envelope routines::unsupported
at new Hash (node:internal/crypto/hash:69:19)
at Object.createHash (node:crypto:138:10)
at BulkUpdateDecorator.hashFactory (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/util/createHash.js:145:18)
at BulkUpdateDecorator.update (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/util/createHash.js:46:50)
at RawSource.updateHash (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/node_modules/webpack-sources/lib/RawSource.js:77:8)
at NormalModule._initBuildHash (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:880:17)
at handleParseResult (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:946:10)
at /Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:1040:4
at processResult (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:755:11)
at /Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:819:5 {
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.6.1
'''

> solution： degrade node version
> nvm use 16



## Property Binding
<img [src]="imgSrc">

## two-way Binding
## Template Reference Variable


