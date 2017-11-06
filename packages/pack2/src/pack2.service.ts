import { Injectable } from '@angular/core';

/*
    TelemetryService Base Class
*/
@Injectable()
export class Pack2Service {

    constructor() {
        console.log('Pack2Service.ctor');
    }

    public sayHi(): string {
        return 'Hi From Pack 2';
    }
}
