import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-client1',
  templateUrl: './client1.page.html',
  styleUrls: ['./client1.page.scss'],
})
export class Client1Page implements OnInit {
 
  scanActive = false;
  scanResult = null;
  @ViewChild('video' , { static: false}) video: ElementRef;

  videoElement: any;
  constructor(private toastCtrl: ToastController) { }

  ngAfterViewInit(){
    this.videoElement = this.video.nativeElement;
  }

  ngOnInit() {
  }

  startScan(){

  }

  stopScan(){

    this.scanActive = false;

  }

  reset(){
  this.scanResult = null;
  
  }

  async showQrToast (){
    const toast = await this.toastCtrl.create({
      message:  'Open ${this.scanResult}?' ,
      position: 'top' ,
      buttons: [
        {
          text: 'open',
          handler: () => {
             window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    })
  }

}
