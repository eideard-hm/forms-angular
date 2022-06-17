import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';


@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SwitchRoutingModule
  ]
})
export class SwitchModule { }
