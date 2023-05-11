import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    /*changed redirectTo to login, so whenever user has eg: http://localhost:4200 and not http://localhost:4200/home he will be sent to the login page*/
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'charmander',
    loadChildren: () => import('./charmander/charmander.module').then( m => m.CharmanderPageModule)
  },
  {
    path: 'squirtle',
    loadChildren: () => import('./squirtle/squirtle.module').then( m => m.SquirtlePageModule)
  },
  {
    path: 'bulbasaur',
    loadChildren: () => import('./bulbasaur/bulbasaur.module').then( m => m.BulbasaurPageModule)
  },  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
