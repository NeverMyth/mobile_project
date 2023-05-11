import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  myStatus:string="";
  constructor(private str:Storage) {}
 
  ngOnInit(): void {
    
  }
  async onSave(){
    await this.str.create();
    await this.str.set("info", this.myStatus)
  }
  async openBrowser(){
    await Browser.open({url: 'https://www.google.com/'});
  }
}
