import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Client1Page } from './client1.page';

const routes: Routes = [
  {
    path: '',
    component: Client1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Client1PageRoutingModule {}
