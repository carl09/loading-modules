import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional } from '@angular/core';

import { AppComponent } from './app.component';
import { Pack1Service, Pack1Module } from 'pack1';
import { Pack2Module } from 'pack2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Pack1Module.forRoot('from app'),
    Pack2Module.forRoot()
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor( @Optional() pack1Service: Pack1Service) {
    console.log('AppModule.ctor', pack1Service);
  }
}
