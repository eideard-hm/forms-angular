import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '@shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private readonly validatorSvc: ValidatorService) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();

    this.onPatchValues();
  }

  get fr(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.pattern(this.validatorSvc.nombreApellidoParent)]],
        email: ['', [Validators.required, Validators.email, Validators.pattern(this.validatorSvc.emailPattern)]],
        username: ['', [Validators.required, this.validatorSvc.noPuedeSerStrider]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required]]
      },
      { validators: [this.validatorSvc.equalsField('password', 'passwordConfirm')] });
  }

  onPatchValues() {
    this.registerForm.patchValue({
      nombre: 'Edier Hernandez',
      email: 'test@test.com',
      username: 'eideard-hm',
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);

    this.registerForm.markAllAsTouched();
  }

  campoNoValido(campo: string): boolean | undefined {
    return this.fr[campo]?.invalid
      && this.fr[campo]?.touched;
  }

}
