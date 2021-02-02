import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Client1PageRoutingModule } from './client1-routing.module';

import { Client1Page } from './client1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Client1PageRoutingModule
  ],
  declarations: [Client1Page]
})
export class Client1PageModule {}
