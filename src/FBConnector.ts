import {OnInit} from 'angular2/angular2';

export class FBConnector implements OnInit{

  ngOnInit(){
    var js,
    id = 'facebook-jssdk',
    ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }

}
