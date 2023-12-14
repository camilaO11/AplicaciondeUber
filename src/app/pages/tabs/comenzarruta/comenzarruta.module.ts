import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComenzarrutaPageRoutingModule } from './comenzarruta-routing.module';

import { ComenzarrutaPage } from './comenzarruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComenzarrutaPageRoutingModule
  ],
  declarations: [ComenzarrutaPage]
})
export class ComenzarrutaPageModule {}
