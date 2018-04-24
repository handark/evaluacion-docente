{"filter":false,"title":"README.md","tooltip":"/evalucacion-docente/README.md","undoManager":{"mark":20,"position":20,"stack":[[{"start":{"row":4,"column":0},"end":{"row":295,"column":0},"action":"remove","lines":["","The seed contains a sample AngularJS application and is preconfigured to install the Angular","framework and a bunch of development and testing tools for instant web development gratification.","","The seed app doesn't do much, just shows how to wire two controllers and views together.","","","## Getting Started","","To get you started you can simply clone the `angular-seed` repository and install the dependencies:","","### Prerequisites","","You need git to clone the `angular-seed` repository. You can get git from [here][git].","","We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js","and its package manager (npm) installed. You can get them from [here][node].","","### Clone `angular-seed`","","Clone the `angular-seed` repository using git:","","```","git clone https://github.com/angular/angular-seed.git","cd angular-seed","```","","If you just want to start a new project without the `angular-seed` commit history then you can do:","","```","git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>","```","","The `depth=1` tells git to only pull down one commit worth of historical data.","","### Install Dependencies","","We have two kinds of dependencies in this project: tools and Angular framework code. The tools help","us manage and test the application.","","* We get the tools we depend upon via `npm`, the [Node package manager][npm].","* We get the Angular code via `bower`, a [client-side code package manager][bower].","* In order to run the end-to-end tests, you will also need to have the","  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on","  [end-to-end testing](#e2e-testing) for more info.","","We have preconfigured `npm` to automatically run `bower` so we can simply do:","","```","npm install","```","","Behind the scenes this will also call `bower install`. After that, you should find out that you have","two new folders in your project.","","* `node_modules` - contains the npm packages for the tools we need","* `app/bower_components` - contains the Angular framework files","","*Note that the `bower_components` folder would normally be installed in the root folder but","`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder","makes it easier to serve the files by a web server.*","","### Run the Application","","We have preconfigured the project with a simple development web server. The simplest way to start","this server is:","","```","npm start","```","","Now browse to the app at [`localhost:8000/index.html`][local-app-url].","","","## Directory Layout","","```","app/                    --> all of the source files for the application","  app.css               --> default stylesheet","  components/           --> all app specific modules","    version/              --> version related components","      version.js                 --> version module declaration and basic \"version\" value service","      version_test.js            --> \"version\" value service tests","      version-directive.js       --> custom directive that returns the current app version","      version-directive_test.js  --> version directive tests","      interpolate-filter.js      --> custom interpolation filter","      interpolate-filter_test.js --> interpolate filter tests","  view1/                --> the view1 view template and logic","    view1.html            --> the partial template","    view1.js              --> the controller logic","    view1_test.js         --> tests of the controller","  view2/                --> the view2 view template and logic","    view2.html            --> the partial template","    view2.js              --> the controller logic","    view2_test.js         --> tests of the controller","  app.js                --> main application module","  index.html            --> app layout file (the main html template file of the app)","  index-async.html      --> just like index.html, but loads js files asynchronously","karma.conf.js         --> config file for running unit tests with Karma","e2e-tests/            --> end-to-end tests","  protractor-conf.js    --> Protractor config file","  scenarios.js          --> end-to-end scenarios to be run by Protractor","```","","","## Testing","","There are two kinds of tests in the `angular-seed` application: Unit tests and end-to-end tests.","","### Running Unit Tests","","The `angular-seed` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],","which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.","","* The configuration is found at `karma.conf.js`.","* The unit tests are found next to the code they are testing and have an `_test.js` suffix (e.g.","  `view1_test.js`).","","The easiest way to run the unit tests is to use the supplied npm script:","","```","npm test","```","","This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start","watching the source and test files for changes and then re-run the tests whenever any of them","changes.","This is the recommended strategy; if your unit tests are being run every time you save a file then","you receive instant feedback on any changes that break the expected code functionality.","","You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to","check that a particular version of the code is operating as expected. The project contains a","predefined script to do this:","","```","npm run test-single-run","```","","","<a name=\"e2e-testing\"></a>","### Running End-to-End Tests","","The `angular-seed` app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests","are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has","special features for Angular applications.","","* The configuration is found at `e2e-tests/protractor-conf.js`.","* The end-to-end tests are found in `e2e-tests/scenarios.js`.","","Protractor simulates interaction with our web app and verifies that the application responds","correctly. Therefore, our web server needs to be serving up the application, so that Protractor can","interact with it.","","**Before starting Protractor, open a separate terminal window and run:**","","```","npm start","```","","In addition, since Protractor is built upon WebDriver, we need to ensure that it is installed and","up-to-date. The `angular-seed` project is configured to do this automatically before running the","end-to-end tests, so you don't need to worry about it. If you want to manually update the WebDriver,","you can run:","","```","npm run update-webdriver","```","","Once you have ensured that the development web server hosting our application is up and running, you","can run the end-to-end tests using the supplied npm script:","","```","npm run protractor","```","","This script will execute the end-to-end tests against the application being hosted on the","development server.","","**Note:**","Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires","the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running","`java -version` from the command line.","","If JDK is not already installed, you can download it [here][jdk-download].","","","## Updating Angular","","Since the Angular framework library code and tools are acquired through package managers (npm and","bower) you can use these tools to easily update the dependencies. Simply run the preconfigured","script:","","```","npm run update-deps","```","","This will call `npm update` and `bower update`, which in turn will find and install the latest","versions that match the version ranges specified in the `package.json` and `bower.json` files","respectively.","","","## Loading Angular Asynchronously","","The `angular-seed` project supports loading the framework and application scripts asynchronously.","The special `index-async.html` is designed to support this style of loading. For it to work you must","inject a piece of Angular JavaScript into the HTML page. The project has a predefined script to help","do this:","","```","npm run update-index-async","```","","This will copy the contents of the `angular-loader.js` library file into the `index-async.html`","page. You can run this every time you update the version of Angular that you are using.","","","## Serving the Application Files","","While Angular is client-side-only technology and it is possible to create Angular web apps that","do not require a backend server at all, we recommend serving the project files using a local","web server during development to avoid issues with security restrictions (sandbox) in browsers. The","sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,","etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.","","### Running the App during Development","","The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js","tool called [http-server][http-server]. You can start this web server with `npm start`, but you may","choose to install the tool globally:","","```","sudo npm install -g http-server","```","","Then you can start your own development web server to serve static files from a folder by running:","","```","http-server -a localhost -p 8000","```","","Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just","configure your server to serve the files under the `app/` directory.","","### Running the App in Production","","This really depends on how complex your app is and the overall infrastructure of your system, but","the general rule is that all you need in production are the files under the `app/` directory.","Everything else should be omitted.","","Angular apps are really just a bunch of static HTML, CSS and JavaScript files that need to be hosted","somewhere they can be accessed by browsers.","","If your Angular app is talking to the backend server via XHR or other means, you need to figure out","what is the best way to host the static files to comply with the same origin policy if applicable.","Usually this is done by hosting the files by the backend server or through reverse-proxying the","backend server(s) and web server(s).","","","## Continuous Integration","","### Travis CI","","[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to","your repository and execute scripts such as building the app or running tests. The `angular-seed`","project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your","tests when you push to GitHub.","","You will need to enable the integration between Travis and GitHub. See the","[Travis website][travis-docs] for instructions on how to do this.","","","## Contact","","For more information on AngularJS please check out [angularjs.org][angularjs].","","","[angularjs]: https://angularjs.org/","[bower]: http://bower.io/","[git]: https://git-scm.com/","[http-server]: https://github.com/indexzero/http-server","[jasmine]: https://jasmine.github.io/","[jdk]: https://wikipedia.org/wiki/Java_Development_Kit","[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads","[karma]: https://karma-runner.github.io/","[local-app-url]: http://localhost:8000/index.html","[node]: https://nodejs.org/","[npm]: https://www.npmjs.org/","[protractor]: http://www.protractortest.org/","[selenium]: http://docs.seleniumhq.org/","[travis]: https://travis-ci.org/","[travis-docs]: https://docs.travis-ci.com/user/getting-started",""],"id":2}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":15},"action":"remove","lines":["angular-seed"],"id":3}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["R"],"id":4},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["e"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["o"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["i"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["r"],"id":5},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["i"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["o"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["e"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["R"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["E"],"id":6},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["v"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["a"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["u"]}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["u"],"id":7},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["a"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["a"],"id":8},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["l"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["u"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["a"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["c"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["ó"],"id":10}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["n"],"id":11}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":12},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["D"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["e"],"id":13}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["o"],"id":14},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["c"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["e"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["n"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["t"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":[" "],"id":15},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["I"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["U"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["S"]},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["H"]}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":57},"action":"remove","lines":["the seed for AngularJS apps"],"id":16},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["R"]},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["e"]},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["p"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["o"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["r"]},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["t"]},{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":[" "],"id":17},{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":["d"]},{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":[" "],"id":18},{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":["E"]},{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["v"]},{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":["a"]},{"start":{"row":0,"column":44},"end":{"row":0,"column":45},"action":"insert","lines":["l"]},{"start":{"row":0,"column":45},"end":{"row":0,"column":46},"action":"insert","lines":["u"]},{"start":{"row":0,"column":46},"end":{"row":0,"column":47},"action":"insert","lines":["a"]},{"start":{"row":0,"column":47},"end":{"row":0,"column":48},"action":"insert","lines":["c"]}],[{"start":{"row":0,"column":48},"end":{"row":0,"column":49},"action":"insert","lines":["i"],"id":19}],[{"start":{"row":0,"column":49},"end":{"row":0,"column":50},"action":"insert","lines":["ó"],"id":21}],[{"start":{"row":0,"column":50},"end":{"row":0,"column":51},"action":"insert","lines":["n"],"id":22}],[{"start":{"row":0,"column":51},"end":{"row":0,"column":52},"action":"insert","lines":[" "],"id":23},{"start":{"row":0,"column":52},"end":{"row":0,"column":53},"action":"insert","lines":["D"]},{"start":{"row":0,"column":53},"end":{"row":0,"column":54},"action":"insert","lines":["o"]},{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"insert","lines":["c"]},{"start":{"row":0,"column":55},"end":{"row":0,"column":56},"action":"insert","lines":["e"]},{"start":{"row":0,"column":56},"end":{"row":0,"column":57},"action":"insert","lines":["n"]},{"start":{"row":0,"column":57},"end":{"row":0,"column":58},"action":"insert","lines":["t"]},{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":89},"action":"remove","lines":["This project is an application skeleton for a typical [AngularJS][angularjs] web app. You can use it","to quickly bootstrap your angular webapp projects and dev environment for these projects."],"id":24},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1524598398004,"hash":"80d7d20ebb76f4ad935a0a05bcf171194072bfec"}