// nothing yet
import {Component, bootstrap}     from        '../src';

/**
 * Original name
 */
export class GoatConfigProvider {
    public name: string = 'James';
    public status: string = 'small';
    constructor() {
        console.log('GoatConfigProvider called');
    }
}

@Component({
    directives: [GoatConfigProvider],
    providers: []
})
export class GoatConfig {
    public name: string;
    public status: string;
    constructor(config: GoatConfigProvider) {
        console.log('GoatConfig', config);
        this.name = config.name;
        this.status = config.status;
    }
}

@Component({
    directives: [GoatConfig],
    providers: []
})
export class GoatConfigConsumer {
    constructor(config: GoatConfig) {
        console.log('GoatConfigConsumer', config);
    }

}

@Component({
    directives: [],
    providers: [GoatConfigProvider]
})
export class ChangeGoatConfig {
    constructor(config: GoatConfigProvider) {
        console.log('ChangeGoatConfig', config);
        config.name = 'HELLO';
        config.status = 'Single';
    }
}

bootstrap(GoatConfigConsumer);
