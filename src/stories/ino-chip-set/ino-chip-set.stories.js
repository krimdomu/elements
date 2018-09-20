import { storiesOf } from '@storybook/vue';

import { decorate, action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-chip-set/readme.md';
import chipReadme from '../../components/ino-chip/readme.md';
import './ino-chip-set.scss';

storiesOf('<ino-chip-set>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-chips">
        <h4>Customizable chip set</h4>
        <p>Change the type and check the action logger for events.</p>
        <ino-chip-set 
          ino-type={select('ino-type', ['', 'choice', 'filter'], '')} 
          onInoChipSetUpdated={action('inoChipSetUpdated',  {depth: 10})}
        >
          <ino-chip ino-value="1" ino-label="Chip 1" ino-icon="favorite_border" ino-selected></ino-chip>
          <ino-chip ino-value="2" ino-label="Chip 2"></ino-chip>
          <ino-chip ino-value="3" ino-label="Chip 3"></ino-chip>
        </ino-chip-set>

        <h4>Type</h4>
  
        <h5>ino-type="filter"</h5>
        
        <ino-chip-set ino-type="filter">
          <ino-chip ino-value="1" ino-label="Chip 1"></ino-chip>
          <ino-chip ino-value="2" ino-label="Chip 2 - with icon" ino-icon="favorite"></ino-chip>
          <ino-chip ino-value="3" ino-label="Chip 3"></ino-chip>
        </ino-chip-set>

        <h5>ino-type="choice"</h5>
        <ino-chip-set ino-type="choice">
          <ino-chip ino-label="Chip 0" ino-value="0"></ino-chip>
          <ino-chip ino-selected ino-label="Selected chip" ino-value="3"></ino-chip>
          <ino-chip ino-label="Chip 3" ino-value="3"></ino-chip>
        </ino-chip-set>
      </div>
    )
  }));

  storiesOf('<ino-chip-set>', module)
    .addDecorator(renderTemplate(chipReadme))
    .add('<ino-chip>', () => ({
      render: h => (
        <div class="story-chip">
          <ino-chip-set>
            <ino-chip
              ino-color-scheme={select(
                'ino-color-scheme',
                ['primary', 'secondary', 'tertiary', 'success', 'warning', 
                'error', 'light', 'dark'
                ],
                'primary'
              )}
              ino-fill={select('ino-fill', ['solid', 'outline'], 'solid')}
              ino-icon={text('ino-icon', '')}
              ino-removable={boolean('ino-removable', true)}
              ino-label={text('<slot />', 'Customizable chip')}
              ino-selected={boolean('ino-selected', false)}

              ino-checkmark={boolean('ino-checkmark', false)}
              onInoChipRemove={action('InoChipRemove')}>
            </ino-chip>
          </ino-chip-set>

          <h4>Colors</h4>
          <ino-chip-set>
            <ino-chip ino-label="Default"></ino-chip>
            <ino-chip ino-color-scheme="primary" ino-label="Primary"></ino-chip>
            <ino-chip ino-color-scheme="secondary" ino-removable ino-label="Secondary"></ino-chip>
            <ino-chip ino-color-scheme="tertiary" ino-icon="users" ino-label="Tertiary"></ino-chip>
            <ino-chip ino-color-scheme="success" ino-label="Success"></ino-chip>
            <ino-chip ino-color-scheme="warning" ino-label="Warning"></ino-chip>
            <ino-chip ino-color-scheme="error" ino-label="Error"></ino-chip>
            <ino-chip ino-color-scheme="light" ino-label="Light"></ino-chip>
            <ino-chip ino-color-scheme="dark" ino-label="Dark"></ino-chip>
          </ino-chip-set>


          <h4>Outline</h4>
          <ino-chip-set>
            <ino-chip ino-fill="outline" ino-label="Outline"></ino-chip>
          </ino-chip-set>

          <h4>Removable and states</h4>
          <ino-chip-set>
            <ino-chip ino-removable ino-label="Removable"></ino-chip>
            <ino-chip ino-selected ino-label="Selected"></ino-chip>
          </ino-chip-set>
        </div>
      )
    }));