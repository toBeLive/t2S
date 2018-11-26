import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-profile',
  templateUrl: './reg-profile.component.html',
  styleUrls: ['./reg-profile.component.css']
})
export class RegProfileComponent implements OnInit {

  userReactiveForm: FormGroup;

  constructor(private userRegiter: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.userReactiveForm.controls;

    if (this.userReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.userReactiveForm.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.userReactiveForm = this.userRegiter.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]
      ],
      age: ['', [
        Validators.required,
        Validators.pattern(/[0-1]/)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ]
    });
  }
}
