import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-charmander',
  templateUrl: './charmander.page.html',
  styleUrls: ['./charmander.page.scss'],
})
export class CharmanderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['home']);
      }
}
