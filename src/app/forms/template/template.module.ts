import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { TemplateRoutingModule } from './template-routing.module'
import { TemplateComponent } from './template.component'

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, FormsModule, TemplateRoutingModule]
})
export class TemplateModule {}
