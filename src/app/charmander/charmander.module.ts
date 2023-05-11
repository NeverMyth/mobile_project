import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharmanderPageRoutingModule } from './charmander-routing.module';

import { CharmanderPage } from './charmander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharmanderPageRoutingModule
  ],
  declarations: [CharmanderPage]
})
export class CharmanderPageModule {}
