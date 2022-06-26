import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchComponent } from './switch.component';

const routes: Routes = [
  { path: '',
  component: SwitchComponent,
  title: 'Reactive Forms Switch'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchRoutingModule { }
