import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerbusquedaPage } from './verbusqueda.page';

const routes: Routes = [
  {
    path: '',
    component: VerbusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerbusquedaPageRoutingModule {}
