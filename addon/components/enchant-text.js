import Ember from 'ember';
import layout from '../templates/components/enchant-text';

const {
  Component,
  computed,
  getProperties,
} = Ember;

export default Component.extend({
  tagName: 'text',
  layout,

  attributeBindings: [
    'dx',
    'dy',
    'textAnchor:text-anchor',
    'fill',
    'transform',
  ],

  x: 0,
  y: 0,

  dx: null,
  dy: null,

  rotate: null,

  value: null,

  textAnchor: 'middle',

  fill: '#000',

  transform: computed('x', 'y', 'rotate', function() {
    const { x, y, rotate } = getProperties(this, 'x', 'y', 'rotate');
    let transformString = `translate(${x}, ${y})`;

    if (rotate) {
      transformString += ` rotate(${rotate})`;
    }

    return transformString;
  }),
});
