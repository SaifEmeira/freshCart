import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSettingRoutingModule } from './new-setting-routing.module';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';


@NgModule({
  declarations: [
    ForgetPassComponent,
    UpdatePassComponent
  ],
  imports: [
    CommonModule,
    NewSettingRoutingModule
  ]
})
export class NewSettingModule { }
