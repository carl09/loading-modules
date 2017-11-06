import { Component, OnInit } from '@angular/core';
import { Pack1Service } from './pack1.service';

@Component({
  selector: 'fet-pack1-root',
  templateUrl: './pack1.component.html'
})
export class Pack1Component implements OnInit {

    public message: string;

  constructor(private pack1Service: Pack1Service) {
    this.message = this.pack1Service.sayHi();
   }

  public ngOnInit() {
    console.log('Pack1Component.init');
  }
}
