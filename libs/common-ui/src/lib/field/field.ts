import { ValidatorFn } from '@angular/forms';

export type FieldType =
  | 'text'
  | 'select'
  | 'number'
  | 'password'
  | 'email'
  | 'date'
  | 'file';

export class Field<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  placeholder: string;
  type: FieldType;
  options?: { key: string; value: string }[];
  validators: ValidatorFn[];
  autocomplete: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      placeholder?: string;
      type?: FieldType;
      options?: { key: string; value: string }[];
      validators?: ValidatorFn[];
      autocomplete?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.type = options.type || 'text';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.autocomplete = options.autocomplete || '';
  }
}
