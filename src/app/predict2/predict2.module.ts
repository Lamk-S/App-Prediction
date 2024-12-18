import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Predict2PageRoutingModule } from './predict2-routing.module';

import { Predict2Page } from './predict2.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Predict2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Predict2Page]
})
export class Predict2PageModule {}
