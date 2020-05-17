import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var espSmartconfig: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startNow(){

    espSmartconfig.startConfig("Arihant","c0:9f:e1:ef:be:14","9052110871","0",1,"", function(res) {
      // res = "Finished: device0,bssid=807d3a5a43aa,InetAddress=192.168.1.9."
      console.log("Started Smart Config", JSON.stringify(res));
      alert(res);
    },function(error){
      // error = "No Device Found!"
      console.log("SMART_CONFIG_ERR", error);
      console.log(JSON.stringify(error));
    });
  }

  stopNow(){
    espSmartconfig.stopConfig(function(res) {
      // res = "Cancel Success"
      console.log("Stopping Smart Config", res);
      console.log(JSON.stringify(res));
    }, function(error) {
      console.log("error in smart confiug stop. ")
      console.log(error);
    });
  }

  scanNetworks(){
    espSmartconfig.getNetworklist({numLevels: false}, (networks)=>{
      console.log("Found Networks : ", JSON.stringify(networks));
    }, (err)=>{
      console.log("NETWORKL_SCAN_ERROR", err);
      console.log(JSON.stringify(err));
    });
  }

}
