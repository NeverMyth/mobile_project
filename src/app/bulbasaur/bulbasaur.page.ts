import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bulbasaur',
  templateUrl: './bulbasaur.page.html',
  styleUrls: ['./bulbasaur.page.scss'],
})
export class BulbasaurPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['home']);
      }
}
