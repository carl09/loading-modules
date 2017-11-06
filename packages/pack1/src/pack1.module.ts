import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pack1Service, PACK1_CONFIG, FakePack1Service } from './pack1.service';
import { Pack1Component } from './pack1.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Pack1Component
    ],
    exports: [
        Pack1Component
    ],
    providers: [
        
    ]
})

// tslint:disable-next-line:no-unnecessary-class
export class Pack1Module {
    public static forRoot(config: string): ModuleWithProviders {
        return {
            ngModule: Pack1Module,
            providers: [
                Pack1Service,
                { provide: PACK1_CONFIG, useValue: config}
            ]
        };
    }

    public static forChild(config: string = null): ModuleWithProviders {
        return {
            ngModule: Pack1Module,
            providers: [
                { provide: Pack1Service, useClass: FakePack1Service}, 
                { provide: PACK1_CONFIG, useValue: config}
            ]
        };
    }

    constructor( @Optional() pack1Service: Pack1Service) {
        console.log('Pack1Module.ctor', pack1Service);
      }
}
