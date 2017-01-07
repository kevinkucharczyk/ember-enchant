import Component from 'ember-component';
import computed from 'ember-computed';
import { getProperties } from 'ember-metal/get';
import layout from '../templates/components/enchant-axis';

export default Component.extend({
  layout,
  tagName: 'g',
  attributeBindings: ['transform'],

  ticks: 6,
  tickFormat: null,
  tickPadding: 3,
  tickSizeInner: 6,
  tickSizeOuter: 6,
  dx: 0,
  dy: 0,

  width: 0,
  height: 0,

  orient: 'left',
  stroke: '#000',

  x: computed('orient', 'width', function() {
    const { orient, width } = getProperties(this, 'orient', 'width');
    if (orient === 'right') {
      return width;
    }
    return 0;
  }),

  y: computed('orient', 'height', function() {
    const { orient, height } = getProperties(this, 'orient', 'height');
    if (orient === 'bottom') {
      return height;
    }
    return 0;
  }),

  transform: computed('x', 'dx', 'y', 'dy', function() {
    const { x, dx, y, dy } = getProperties(this, 'x', 'dx', 'y', 'dy');

    return `translate(${x + dx}, ${y + dy})`;
  }),

  d: computed('orient', 'scale', 'tickSizeOuter', function() {
    const {
      orient,
      tickSizeOuter,
      scale,
    } = getProperties(this,
      'orient',
      'tickSizeOuter',
      'scale');
    const range = scale.range();
    const range0 = range[0] + 0.5;
    const range1 = range[range.length - 1] + 0.5;
    const k = orient === 'top' || orient === 'left' ? -1 : 1;

    return orient === 'left' || orient === 'right' ?
      `M${k * tickSizeOuter},${range0}H0.5V${range1}H${k * tickSizeOuter}` :
      `M${range0},${k * tickSizeOuter}V0.5H${range1}V${k * tickSizeOuter}`;
  }),

  computedTicks: computed(
    'orient',
    'scale',
    'ticks',
    'tickFormat',
    'tickPadding',
    'tickSizeInner',
    function() {
      const {
        orient,
        scale,
        ticks,
        tickFormat,
        tickPadding,
        tickSizeInner,
      } = getProperties(this,
        'orient',
        'scale',
        'ticks',
        'tickFormat',
        'tickPadding',
        'tickSizeInner');
      const ticksCount = parseInt(ticks, 10);
      const k = orient === 'top' || orient === 'left' ? -1 : 1;
      const spacing = Math.max(tickSizeInner, 0) + tickPadding;
      const vertical = orient === 'left' || orient === 'right';
      const x = vertical ? 'x' : 'y';
      const y = vertical ? 'y' : 'x';

      let textAnchor = 'middle';
      if (orient === 'right') {
        textAnchor = 'start';
      } else if (orient === 'left') {
        textAnchor = 'end';
      }

      return scale
        .ticks(ticksCount)
        .map(tick => {
          const line = {};
          line[`${x}2`] = k * tickSizeInner;
          line[`${y}1`] = 0.5;
          line[`${y}2`] = 0.5;

          const text = {};
          text[x] = k * spacing;
          text[y] = 0.5;

          let dy = '0.32em';
          if (orient === 'top') {
            dy = '0em';
          } else if (orient === 'bottom') {
            dy = '0.71em';
          }
          text.dy = dy;
          text.value = tickFormat ? scale.tickFormat(6, tickFormat)(tick) : tick;

          return {
            transform: vertical ? `translate(0,${scale(tick)})` : `translate(${scale(tick)},0)`,
            textAnchor,
            line,
            text,
          };
        });
    }
  ),
});
