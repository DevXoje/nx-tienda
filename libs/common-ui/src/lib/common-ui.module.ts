import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FieldComponent } from './field/field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormComponent, FieldComponent],
  exports: [FormComponent, FieldComponent],
})
export class CommonUiModule {}
