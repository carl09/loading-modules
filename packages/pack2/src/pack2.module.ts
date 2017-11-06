import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { Pack2Service } from './pack2.service';
import { CommonModule } from '@angular/common';
import { Pack2Component } from './pack2.component';
import { Pack1Module, Pack1Service } from 'pack1';

@NgModule({
    imports: [
        CommonModule,
        // Pack1Module, // .forRoot('From Pack 2'), // .forChild('from pack 2')
    ],
    declarations: [
        Pack2Component
    ],
    exports: [
        Pack2Component,
    ],
    providers: [
    ],
    entryComponents: [
        Pack2Component
    ]
})

// tslint:disable-next-line:no-unnecessary-class
export class Pack2Module {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: Pack2Module,
            providers: [
                Pack2Service
            ]
        };
    }

    constructor( @Optional() pack1Service: Pack1Service) {
        console.log('Pack2Module.ctor', pack1Service);
      }
}
