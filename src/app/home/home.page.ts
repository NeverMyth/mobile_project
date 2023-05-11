import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
/*created a private variable called router of type Router from the import Router above*/
  constructor(private router: Router) {}
    
  /*4 different pages*/
  charmander(){
    this.router.navigate(['charmander']);
      }
      squirtle(){
        this.router.navigate(['squirtle']);
          }
          bulbasaur(){
            this.router.navigate(['bulbasaur']);
              }
              login(){
                this.router.navigate(['login']);
                  }
                  
}
