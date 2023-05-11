import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logMeIn(){
this.router.navigate(['home']);
  }
  status(){
    this.router.navigate(['status']);
      }
  
        async openBrowser(){
          await Browser.open({url: 'https://www.pokemon.com/us/pokedex'});
        }
          
      
}
