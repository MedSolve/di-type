# Introduction: di-type
A developer can use an instance of a _DependencyInjector_ class called _DependencyInjectorComponent_. The instance provide [singletons](https://en.wikipedia.org/wiki/Singleton_pattern) to any class that might need a singleton of another class. _DependencyInjectorComponent_ is designed to be used as an [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html). This means  _experimentalDecorators: true_ should be set in your projects _tsconfig.json_.

# Usage
To use this in your project and save it in the package.json file do:
`npm install di-type --save`

Please be aware that we use [semantic versioning](http://semver.org). This means that you should be able to safely subscribe to updates on this module for versions 1.x.x or 2.x.x etc. Major versions for example from 1.x.x to 2.x.x is not safe as the module API might change.

# Example
An example of the annotations possible in the component is given here. There are two notations forms _createWith_ and _inject_.

```javascript
// if you are using ORDS as an npm module
import {DependencyInjectorComponent}  from 'ords-fhir';
// if you are developing an internal component
import {DependencyInjectorComponent}  from '../path/to/dependency-injection';

// another class that is needed a singleton of
import {Anotherclass} from './somepath';

@DependencyInjector.createWith(Anotherclass)
class Test {
    constructor(ac: Anotherclass) {
    
        // Test is instantiated automatically and Anotherclass singleton is injected
    }
}

class AnotherTest {
    // when AnotherTest is instantiated the property ac contains a singleton of Anotherclass
    @DependencyInjector.inject(Anotherclass)
    private ac: Anotherclass
}
```


# License
The MIT License (MIT)

