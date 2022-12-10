import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-tienda-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() label?: string = '';
  @Input() backgroundColor?: string = '';
}
