import { Meta, StoryObj } from '@storybook/angular'
import { TestStorybookComponent } from './test-storybook.component'

export default {
    title: 'Pages/test-storybookPage',
    component: TestStorybookComponent,
    tags: ['autodocs'],
    render: (args:TestStorybookComponent) => ({
        props:{
            ...args
        }
    }),

} as Meta<TestStorybookComponent>;


type TestStorybookComponentStory = StoryObj<TestStorybookComponent>;

export const Primary: TestStorybookComponentStory = {
    args: {
        label: "TEST",
        color: ""
    }, 
};


export const Secondary: TestStorybookComponentStory = {
    args: {
        label: "HZHZHZH",
        color: ""
    }, 
};


export const Colored: TestStorybookComponentStory = {
    args: {
        label: "TEST",
        color: "red"
    }, 
};

