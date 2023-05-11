import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquirtlePage } from './squirtle.page';

const routes: Routes = [
  {
    path: '',
    component: SquirtlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquirtlePageRoutingModule {}
