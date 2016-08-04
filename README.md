# Introduction: di-type
This npm module support the ability of dependency injection and thereby also dependency inversion. It can be used to provide [singletons](https://en.wikipedia.org/wiki/Singleton_pattern) to any class that might need a singleton of another class. The module is designed to be used as an [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html). This means  _experimentalDecorators: true_ should be set in your projects _tsconfig.json_.

# Usage
To use this in your project and save it in the package.json file do:
`npm install di-type --save`

Please be aware that we use [semantic versioning](http://semver.org). This means that you should be able to safely subscribe to updates on this module for versions 1.x.x or 2.x.x etc. Major versions for example from 1.x.x to 2.x.x is not safe as the module API might change.

# Getting dependencies
In order to include a dependency it is important to understand WHEN it is needed. For applications there might be a runtime configuration phase. This is where a class might need acces to some _providers_. When this phase has ended there might be a need to acces the configured _providers_ or _directives_ as they are called here. 

# Example
An example is given here. Please be aware that the class _SetConfig_ will run before _SomeConsumer_ even tho it is denoted after the other class. 

```javascript
// import the Component and bootstrap from our libery make sure that it is installed first
import {Component, bootstrap}  from 'di-type';

// another class that is needed a singleton of
import {SomeConfigService} from './somepath';
import {SomeService}       from './someotherpath';

@Component({
    directives: [SomeConfigService],
    providers: []
})
class SomeConsumer {
    constructor(scs: SomeConfigService) {

        // here we can use the configured config service
    }
}

@Component({
    directives: [SomeService],
    providers: [SomeConfigService]
})
class SetConfig {
    constructor(scs: SomeConfigService, ss: SomeService) {

        // here we can change the content of scs using the ss
    }
}

class Application {
    constructor () {

        // doing something cool here
    }
}

// start up everthing
bootstrap(Application);

```
The bootstrap function takes one parameter. This parameter is the MAIN class of your application.

# License
The MIT License (MIT)

