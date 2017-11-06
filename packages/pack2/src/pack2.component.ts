import { Component, OnInit } from '@angular/core';
import { Pack2Service } from './pack2.service';

@Component({
  selector: 'fet-pack2-root',
  templateUrl: './pack2.component.html'
})
export class Pack2Component implements OnInit {

    public message: string;

  constructor(private pack2Service: Pack2Service) {
    this.message = this.pack2Service.sayHi();
   }

  public ngOnInit() {
    console.log('Pack2Component.init');
  }
}

