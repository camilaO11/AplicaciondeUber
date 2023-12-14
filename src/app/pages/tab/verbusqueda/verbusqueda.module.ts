import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerbusquedaPageRoutingModule } from './verbusqueda-routing.module';

import { VerbusquedaPage } from './verbusqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerbusquedaPageRoutingModule
  ],
  declarations: [VerbusquedaPage]
})
export class VerbusquedaPageModule {}
