import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ContactForm } from './interfaces/template'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  contactFormModel: ContactForm = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }

  constructor () {}

  ngOnInit (): void {}

  save (form: NgForm): void {
    if (form.invalid) {
      return
    }
  }
}
