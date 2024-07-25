import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.scss']
})
export class FormoneComponent {
  formGroup = new FormGroup({
    title: new FormControl('El Programa del Sol', Validators.required),
    rating: new FormControl('5', Validators.min(1)),
    ratingName: new FormControl()
  })
  clickSave(): void {
    console.log(this.formGroup);
    console.log(this.formGroup.valid);
    console.log(this.formGroup.value);
    console.log(this.formGroup.controls.rating.touched);
  }
}
