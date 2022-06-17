import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from './interfaces/person';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  miFormulario!: FormGroup;

  persona: Person = {
    genero: 'F',
    notificaciones: true
  };

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.initMiFormulario();

    this.onPatchValue();

    this.sincronizarPersonaConForm();
  }

  initMiFormulario(): FormGroup {
    return this._fb.group({
      genero: ['M', [Validators.required]],
      notificaciones: [true, [Validators.required]],
      condiciones: [false, Validators.requiredTrue]
    })
  }

  onPatchValue(): void {
    this.miFormulario.patchValue(this.persona);
  }

  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    this.persona = formValue;
  }

  sincronizarPersonaConForm(): void {
    this.miFormulario.valueChanges
      .subscribe(({ condiciones, ...rest }) => this.persona = rest)
  }

}
