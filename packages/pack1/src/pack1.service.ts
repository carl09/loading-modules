import { Injectable, InjectionToken, Inject } from '@angular/core';


export const PACK1_CONFIG = new InjectionToken<string>('PACK1_CONFIG');

@Injectable()
export class Pack1Service {

    constructor(@Inject(PACK1_CONFIG) private config: string) {
        console.log('Pack1Service.ctor');
    }

    public sayHi(): string {
        return 'Hi From Pack 1' + this.config;
    }
}

@Injectable()
export class FakePack1Service {

    constructor(@Inject(PACK1_CONFIG) private config: string) {
        console.log('FakePack1Service.ctor');
    }

    public sayHi(): string {
        return 'Hi From Fake Pack 1' + this.config;
    }
}
