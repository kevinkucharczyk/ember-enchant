import Component from 'ember-component';
import computed from 'ember-computed';
import get, { getProperties } from 'ember-metal/get';
import { line, curveBasis } from 'd3-shape';
import layout from '../templates/components/enchant-line';

export default Component.extend({
  layout,
  tagName: 'g',
  attributeBindings: ['transform'],

  data: null,

  stroke: '#000',
  strokeWidth: 2,

  dx: 0,
  dy: 0,

  xProperty: 0,
  yProperty: 1,

  xScale: null,
  yScale: null,

  transform: computed('dx', 'dy', function() {
    const { dx, dy } = getProperties(this, 'dx', 'dy');

    return `translate(${dx}, ${dy})`;
  }),

  xAccessor: computed('xProperty', function() {
    return d => d[get(this, 'xProperty')];
  }),
  yAccessor: computed('yProperty', function() {
    return d => d[get(this, 'yProperty')];
  }),

  d: computed('data', 'xScale', 'yScale', 'xAccessor', 'yAccessor', function() {
    const {
      data,
      xScale,
      yScale,
      xAccessor,
      yAccessor,
    } = getProperties(
      this,
      'data',
      'xScale',
      'yScale',
      'xAccessor',
      'yAccessor'
    );

    return line()
      .curve(curveBasis)
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)))(data);
  }),
});
