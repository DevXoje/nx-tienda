import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FieldComponent } from './field.component';
import { Validators } from '@angular/forms';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'FieldComponent',
  component: FieldComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FieldComponent>;

const Template: Story<FieldComponent> = (args: FieldComponent) => ({
  props: args,
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
});

export const TextField = Template.bind({});
TextField.args = {
  field: {
    type: 'text',
    value: '',
    key: '',
    label: '',
    required: false,
    order: 1,
    controlType: '',
    placeholder: 'pon cosas',
    validators: [Validators.required],
    autocomplete: 'name',
  },
};
export const Secondary = Template.bind({});
Secondary.args = {
  ...TextField.args,
};
