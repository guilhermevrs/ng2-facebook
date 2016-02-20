export class FBConnector {

  constructor(){
    console.log('hus')
  }

  initFB(){
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
