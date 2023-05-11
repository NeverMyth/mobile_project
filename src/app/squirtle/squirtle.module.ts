import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquirtlePageRoutingModule } from './squirtle-routing.module';

import { SquirtlePage } from './squirtle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquirtlePageRoutingModule
  ],
  declarations: [SquirtlePage]
})
export class SquirtlePageModule {}
