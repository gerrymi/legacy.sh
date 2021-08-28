import { Typography } from './Typography';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args: any) => <Typography {...args} />;

export const GeneralUsage: any = Template.bind({});

GeneralUsage.args = {
  children: 'General usage',
};
