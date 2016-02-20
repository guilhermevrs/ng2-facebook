import {Component, OnInit} from 'angular2/core';
import {FBConnector} from 'ng2-facebook/ng2-facebook';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent implements OnInit{
  ngOnInit(){
    var fbCon: FBConnector = new FBConnector;
    fbCon.initFB();
  }
}
