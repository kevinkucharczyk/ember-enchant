import Ember from 'ember';
import layout from '../templates/components/enchant-chart';

const {
  Component,
  computed,
  getProperties,
} = Ember;

export default Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['width', 'height'],
  width: 800,
  height: 400,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,

  innerWidth: computed('width', 'marginLeft', 'marginRight', function() {
    const {
      width,
      marginLeft,
      marginRight,
    } = getProperties(this, 'width', 'marginLeft', 'marginRight');
    return width - marginLeft - marginRight;
  }),

  innerHeight: computed('height', 'marginTop', 'marginBottom', function() {
    const {
      height,
      marginTop,
      marginBottom,
    } = getProperties(this, 'height', 'marginTop', 'marginBottom');
    return height - marginTop - marginBottom;
  }),
});
