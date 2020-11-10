import React from 'react';
import AddTaskSection, {props} from '../Components/AddTask';
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  component: AddTaskSection,
  title: 'New Task Screen',
 } as Meta

const Template:Story<props> = args => <AddTaskSection {...args} />;

export const Open  = Template.bind({});
Open.args = {
    open: true
}

export const Close  = Template.bind({});
Close.args = {
    open: false
}