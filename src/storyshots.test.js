// src/storyshots.test.js
import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';
initStoryshots({
    test: imageSnapshot({storybookUrl: 'http://localhost:4855/'}),
});