import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Pack1Service } from 'pack1';
import { Pack2Component } from 'pack2';

@Component({
  selector: 'ntx-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  @ViewChild('componentContainer', { read: ViewContainerRef }) public container;

  constructor(pack1Service: Pack1Service, 
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.title = pack1Service.sayHi();
  }

  public loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Pack2Component);

    this.container.clear();

    const componentRef = this.container.createComponent(componentFactory);
    
  }
}
