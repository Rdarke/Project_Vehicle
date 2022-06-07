import Button from "../components/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const Base = Template.bind({})
Base.args = {
  backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  label: 'Base',
};
