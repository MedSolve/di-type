import {Dependencies}     from    './models/dependencies';

let prepared: Array<any> = [];

export function Component(dependencies: Dependencies): Function {

    'use strict';

    let args: Array<Function> = [];

    Array.prototype.push.apply(args, dependencies.providers);
    Array.prototype.push.apply(args, dependencies.directives);

    // return the function specified by ts documentation
    return (target: any) => {

        // the new constructor behaviour
        let f: any = function (): any {

            // prepre holder for instances
            let instances: Array<any> = [];

            // retrive instance of the class
            for (let entry of f.dependencies) {
                instances.push(instanceiateDependency(entry));
            }

            // apply to original target constructor
            target.apply(this, instances);
            f._instance = this;
        };

        // forgot to copy prototype
        f.prototype = target.prototype;
        f.dependencies = args;

        prepared.push(f);

        return f;
    };
}

function instanceiateDependency(target: any): any {

    'use strict';

    // check if an instances exists
    if (target._instance === undefined) {

        // create new instance
        target._instance = new target();
    }

    return target._instance;
}

export function bootstrap(main: any): void {

    'use strict';

    let tmp: any;

    // start everything
    for (let entry of prepared) {

        // start only if not allready started
        if (entry._instance === undefined) {

            tmp = new entry();
        }
    }

    // start instance
    if (main._instance === undefined) {
        this.main = new main();
    } else {
        this.main = main._instance;
    }
}
