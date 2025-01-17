import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withIconControl } from '../utils';

import './ino-fab-set.scss';
const clickHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.tagName !== 'INO-FAB-SET' && e.target.tagName !== 'INO-ICON') {
    return;
  }

  if (e.target.tagName === 'INO-ICON') {
    const childEl = e.target as HTMLInoIconElement;
    const el = childEl.closest('ino-fab-set') as HTMLInoFabSetElement;
    el.openDial = !el.openDial;
    return;
  }

  if (e.target.tagName === 'INO-FAB-SET') {
    const el = e.target as HTMLInoFabSetElement;
    el.openDial = !el.openDial;

    return;
  }
};

export default {
  title: 'Buttons/<ino-fab-set>',
  component: 'ino-fab-set',
  parameters: {
    actions: {
      handles: ['click ino-fab'],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story),
    (story) => {
      useEffect(() => {
        document.addEventListener('click', clickHandler);
        return () => {
          document.removeEventListener('click', clickHandler);
        };
      });

      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoFabSet> = (args) => html`
  <ino-fab-set
    open-dial="${args.openDial}"
    top-bottom-location="${args.topBottomLocation}"
    left-right-location="${args.leftRightLocation}"
    dial-direction="${args.dialDirection}"
  >
    <ino-fab label="First FAB">
      <ino-icon slot="icon-leading" icon="star"></ino-icon>
    </ino-fab>
    <ino-fab label="Second FAB">
      <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
    </ino-fab>
    <ino-fab label="Third FAB">
      <ino-icon slot="icon-leading" icon="info"></ino-icon>
    </ino-fab>
  </ino-fab-set>
`;

Playground.args = {
  openDial: false,
  dialDirection: 'top',
  leftRightLocation: 'left',
  topBottomLocation: 'bottom',
};

withIconControl(Playground, 'icon', '_fab_set_arrow_up');

const VERTICAL_POSITION_OPTIONS = ['top', 'bottom'];
const HORIZONTAL_POSITION_OPTIONS = ['left', 'right'];

Playground.argTypes = {
  topBottomLocation: {
    control: {
      type: 'select',
    },
    options: VERTICAL_POSITION_OPTIONS,
  },
  leftRightLocation: {
    control: {
      type: 'select',
    },
    options: HORIZONTAL_POSITION_OPTIONS,
  },
  dialDirection: {
    control: {
      type: 'select',
    },
    options: [...VERTICAL_POSITION_OPTIONS, ...HORIZONTAL_POSITION_OPTIONS],
  },
};

export const CustomIcons: Story<Components.InoFabSet> = () => html`
  <ino-fab-set
    top-bottom-location="bottom"
    left-right-location="right"
    dial-direction="left"
  >
    <ino-icon slot="icon-closed" icon="help"></ino-icon>
    <ino-icon slot="icon-opened" icon="add"></ino-icon>
    <ino-fab label="First FAB">
      <ino-icon slot="icon-leading" icon="star"></ino-icon>
    </ino-fab>
    <ino-fab label="Second FAB">
      <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
    </ino-fab>
    <ino-fab label="Third FAB">
      <ino-icon slot="icon-leading" icon="info"></ino-icon>
    </ino-fab>
  </ino-fab-set>
`;
