import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComenzarrutaPage } from './comenzarruta.page';

const routes: Routes = [
  {
    path: '',
    component: ComenzarrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComenzarrutaPageRoutingModule {}
