## training.codewars-solutions.javascript ##

#!!! SPOILER !!!#
Contains MY solutions for different Problems form ```www.codewars.com``` for JavaScript.<br/>
Repo is used to exchange MY Project between my different Computer and Operating Systems


## HowTo: Unit-Test JavaScript ##

To test JavaScript-Sources without starting a Server, or call the functions within a HTML-File, I'm using Karma as a _test runner_, 
Mocha as the _testing framework_ and Chai as the _assertion library_.<br/>
Before you proceed you have to make sure, you have Node.js an NPM installed. NPM is a package manager for JavaScript.<br/>

1. Install Karma ```mpm install karma --save-dev```. The ```--save-dev```-Option means, that this package will only appear in your devDependencies.
since we only need it to test our JavaScript-Function during the development. In addition, if you'd like to use Karma from your command-line/bash 
```npm install -g karma-cli```. The __-g__ makes the command globally available. After you configured your test-case you could start it with ```karma start```.
2. Install Mocha ```npm install karma-mocha --save-dev```. Mocha is used to simple describe an run test-cases.
3. Install Chai ```npm install karma-chai --save-dev```. It may be necessary to install chai globally ```npm install -g karma-chai```, 
if you the chai-framework can't be found. Chai is an assertion library, which allows to create JUnit like test-cases, e.g. 
```chai.assert.equal(foo, "foo");``` or ```chai.assert.notEqual(foo, "notFoo");```
4. Install PhantomJS ```npm install karma-phantomjs-launcher --save-dev```. PhantomJS is a headless, window-less test environment. 
Instead of PhantomJS you also can configure karma to use a browser, like Firefox or Chrome. So every time you run your test-cases, 
a browser will be started.

After these steps, have to create a __config-file__. You can generate it with ```karma init``` and answering the prompted questions. 
You can modify the file, if it don't fully meet your requirements.<br/>
To run a test you have to navigate to where your __karma.conf.js__ is located and start the test within your command-line with ```karma start```.<br/>
Of course you can replace the test-framework __Mocha__ with __Jasmine__.


##Additional information##
Karma config file not included.<br/>
Following some excerpt from the config-file.

1. ```frameworks: ['mocha', 'chai']```
2. ```reporters: ['progress', 'junit', 'dots']```
3. ```browsers: ['Firefox', 'PhantomJS']```