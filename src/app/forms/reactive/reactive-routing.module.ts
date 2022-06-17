import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveComponent } from './reactive.component'

const routes: Routes = [
  {
    path: '',
    component: ReactiveComponent,
    title: 'Reactive Forms'
  },
  {
    path: 'switches',
    loadChildren: () => import('./switch/switch.module').then(m => m.SwitchModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
