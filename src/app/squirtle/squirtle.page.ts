import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-squirtle',
  templateUrl: './squirtle.page.html',
  styleUrls: ['./squirtle.page.scss'],
})
export class SquirtlePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['home']);
      }
}
