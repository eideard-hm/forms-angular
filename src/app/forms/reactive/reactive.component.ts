import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  contactForm!: FormGroup

  constructor (private readonly fb: FormBuilder) {}

  ngOnInit (): void {
    this.contactForm = this.startForm()
    this.onPatchValue()
  }

  get contactFormControls (): { [key: string]: AbstractControl } {
    return this.contactForm.controls
  }

  startForm (): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: [false, [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]
    })
  }

  onPatchValue():void{
    this.contactForm.patchValue({
      name: 'Edier'
    })
  }

  save (): void {
    if(this.contactForm.invalid){
      return
    }
    console.log('Save reactive form ->', this.contactForm.value)
  }
}
