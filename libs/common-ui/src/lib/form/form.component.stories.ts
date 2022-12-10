import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormComponent } from './form.component';
import { withDesign } from 'storybook-addon-designs';
import { forms } from '@angular/core/schematics/migrations/typed-forms/util';

export default {
  title: 'FormComponent',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FormComponent>;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
});

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: 'Buttones',
  backgroundColor: '#ff0',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  label: '😄👍😍💯',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  label: '📚📕📈🤓',
};
