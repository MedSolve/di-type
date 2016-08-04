import {Injectable}       from    './injectable';

export interface Dependencies {
    directives: Array<Injectable>;
    providers: Array<Injectable>;
}
