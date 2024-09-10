import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';

const routes: Routes = [
  {path:"forget",component:ForgetPassComponent},
  {path:"update",component:UpdatePassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSettingRoutingModule { }
