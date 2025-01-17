import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-option-group.scss';

export default {
  title: 'Input/ino-option-group',
  component: 'ino-option-group',
  decorators: [(story) => decorateStoryWithClass(story, 'story-option-group')],
} as Meta;

export const Playground = (args): TemplateResult => html`
  <div class="story-option-group-customizable">
    <ino-select label="Select with Group">
      <ino-option-group label="${args.label}">
        <ino-option value="Option 1">Option 1</ino-option>
        <ino-option value="Option 2">Option 2</ino-option>
        <ino-option value="Option 3">Option 3</ino-option>
      </ino-option-group>
    </ino-select>
  </div>
`;
Playground.args = {
  label: 'Group Label',
};

export const MultipleGroups = (): TemplateResult => html`
  <div class="story-option-group">
    <ino-select label="Select with Groups">
      <ino-option-group label="My First Group">
        <ino-option value="Option 1">Option 1</ino-option>
        <ino-option value="Option 2">Option 2</ino-option>
        <ino-option value="Option 3">Option 3</ino-option>
      </ino-option-group>
      <ino-option-group label="My Second Group">
        <ino-option value="Option 5">Option 5</ino-option>
        <ino-option value="Option 6">Option 6</ino-option>
        <ino-option value="Option 7">Option 7</ino-option>
      </ino-option-group>
    </ino-select>
  </div>
`;
