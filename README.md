# AhjoJs

Contents:

* Setting up shop
* Mission of Ahjojs
* Architecture
* MVP


## SETTING UP SHOP

**These are instructions for developing AhjoJs further not about developing with AhjoJs. Yet**

To set up a proper development environment for AhjoJs, a few non obvious things are required as prerequisite.

### yalc as local npm repository

yarn / npm link makes a link the test project with everything in node_modules copied too. That causes problems with Mobx (see issue [1082](https://github.com/mobxjs/mobx/issues/1082)). 

Install yalc with

`yarn global add yalc`

Then publish any of the AhjoJs Packages by running command publish inside the directory (server, client, core).

`yalc publish`

The in test project install the package with add: 

`yalc add ahjoserver`

### rollup as bundler

AhjoJS uses rollup as it's bundler instead of webpack as webpack 4 cannot really support packages that runs in both node and browser. Check out instructions from their [website ](https://rollupjs.org/).



## MISSION

AhjoJs wants to be a solid framework for prototyping and small user base B2B applications that require a lot of features, easy maintainability,
good documentation and fast implementation utilizing existing libraries and tools.

AhjoJs is opionated framework with options. It tries to keep all apis clear, simple and open so that any part of it could be replaced with custom code
or not used at all. It gives options for development teams to choose best technologies for their use cases.

### AhjoJs doesn't

Some features are purposefully left out of scope for AhjoJs.

Server side rendering is a great feature, but hard to implement and mostly useless in applications where AhjoJs is meant to be used. If your project needs SSR
because of heavy traffic, then AhjoJs is most likely not the right choise.


## ARCHITECTURE

The AhjoJS should provided components that can be used to setup a project. AhjoJs also provides tutorials and documentation for how to use it and create projects
with it. 

### Version control and process

The architecture of the AhjoJs will evolve during the development as MVP has quite different objectives that the real production version. All code is located in a single repository
at first and it will provide a single package that will be used in both backend and front-end. This will change as time goes on and more alternative technologies
are added as options.

GIT is used as the version control system. The 'master' branch is the stable branch. Only maintainers are allowed to make changes to it all changes need to go through next branch.
The 'next' branch is used as the target next release version testing, only features that are ready are merged into it through pull requests and code review. Development happens in
feature branches that start with the ticket-id. When the feature is ready and tested it is merged to 'next' branch. 'common' branch is used for development and fixes of non-feature
specific code, like utils and tools already in use within other features. 'core' branch is used for the development of AhjoJs core. New releases from this branch usually 
mean a major version change. These rules will be a subject of change when necessary.

### Side effects

As much of the code as possible should be written with functional paradigms in mind as this makes testing and scaling later on much easier. AhjoJs itself should not have much
side-effects itself. 

### Configuring AhjoJs









## MVP

The MVP version is more opionated and has very few, if any, options. It makes some clear technological choices with alternatives provided later on. Some 
parts are valid for both front end and backend. The MVP version is built with following demo applications:

 - Simple blog system
 - Simple Form filling application with authetication
 - A Realtime Socket based chat
 - Simple ordering system

### Tech stack

The MVP makes so hard opionated choises for chosen technologies. Some may change as the project proceeds and alternatives are hopefully provided.

#### JavaScript (ES6+)

JavaScript is chosed over TypeScript as the target of Ahjo is to make implementation faster and simpler. Mobx-State-Tree provides runtime typing for our data, thus
eliminating the most obvious need for static typing. Of course AhjoJs should be usable from TypeScript.

#### React

React (16 and up) is used as the View component. Mostly AhjoJs tries to avoid direct coupling with React as much as possible, but all demo cases for
MVP will use React. All directly React specific things should be written to a separate ahjo-react package, but in MVP they are part of the core. 

React is chosen as it is the most used view library for web at the time writing this document and most used internally in our company.

In the future we hope to have alternatives for Vue and Angular.

#### Mobx-State-Tree

Mobx-State-Tree is used as the main state container for BOTH front-end and server. MST will be part of the core for a foreseeable future. 

The MST is chosen because it ticks all the boxes necesary for AhjoJs to work. It is fast and robust, easy and quick to write. It works well
both in front-end and backend and has runtime typing for models. It also allows us to write common code for both backend and front-end.

In the future we hope be able to make this part as an optional component so that for example Redux could be used instead.

#### REST

The first communication to be implemented with AhjoJs is a plain Rest api between backend and front-end. This mainly because it is good enough for
most use cases, is widely supported by other libraries and familiar for developers.

#### WebSocket

Websocket is also implemented in the MVP as an alternative for REST for those realtime applications and data that needs to be pushed from the backend to front-end.

The backend will use ws library for websocket connections

#### Express 

Express is simple, lightweight and proved Node server and is very familiar for most coders who have worked with node backends.

#### FileSystem Storage

The persistent model will be a simple file system storage.

#### PostgeSQL

For Rational database we will use postgres in the MVP. Many other databases will follow later on, firstly most likely some NoSQL database.

#### Docker

The AhjoJs needs to be implemented so that it can be easily ran in a container. The persistent data storage most likely needs to run in other container (like postgre).

#### Jest

Jest is used a unit test suite. It provides all necessary test tool types without external tools

#### Webpack+Babel

As AhjoJs is built with ES6, the source code is compiled with Babel and bundled with Webpack


