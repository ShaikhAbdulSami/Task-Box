import React from 'react';
import ViewTask from '../Components/ViewTask';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux'
import { store } from "../ReduxReducer"

export default {
  component: ViewTask,
  title: 'ViewTask',
  decorators: [story => <Provider store={store}>{story()}</Provider>],

} as Meta

const Template:Story<null> = () => <ViewTask />;

export const Default = Template.bind({});