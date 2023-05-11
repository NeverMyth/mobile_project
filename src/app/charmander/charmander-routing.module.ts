import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharmanderPage } from './charmander.page';

const routes: Routes = [
  {
    path: '',
    component: CharmanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharmanderPageRoutingModule {}
