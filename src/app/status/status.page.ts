import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string = "";

  //initializing Storage with a constructor.
  constructor(private str:Storage) { }

  ngOnInit() {
  }

  //async/await saving may take time.

  async onSave(){
    await this.str.create();
    await this.str.set("info", this.myStatus)
  }
  
}