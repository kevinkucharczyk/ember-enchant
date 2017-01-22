import Ember from 'ember';
import { arc, pie } from 'd3-shape';
import { interpolateRainbow, scaleOrdinal, scaleSequential } from 'd3-scale';
import layout from '../templates/components/enchant-donut';

const {
  Component,
  computed,
  get,
  getProperties,
} = Ember;

const tau = 2 * Math.PI;

export default Component.extend({
  layout,
  tagName: 'g',
  attributeBindings: ['transform'],
  data: null,

  groupProperty: 0,
  valueProperty: 1,

  cornerRadius: 0,

  startAngle: 0,
  endAngle: tau,
  padAngle: 0,

  colorInterpolator: interpolateRainbow,
  colorRange: null,

  radius: computed('width', 'height', function() {
    const { width, height } = getProperties(this, 'width', 'height');
    return Math.min(width, height) / 2;
  }),

  innerRadius: computed('radius', function() {
    const radius = get(this, 'radius');
    return radius - 70;
  }),

  outerRadius: computed('radius', function() {
    const radius = get(this, 'radius');
    return radius - 10;
  }),

  transform: computed('width', 'height', function() {
    const { width, height } = getProperties(this, 'width', 'height');
    return `translate(${width / 2}, ${height / 2})`;
  }),

  groupAccessor: computed('groupProperty', function() {
    return d => d[get(this, 'groupProperty')];
  }),
  valueAccessor: computed('valueProperty', function() {
    return d => d[get(this, 'valueProperty')];
  }),

  pie: computed('valueAccessor', 'startAngle', 'endAngle', 'padAngle', function() {
    const {
      valueAccessor,
      startAngle,
      endAngle,
      padAngle,
    } = getProperties(this, 'valueAccessor', 'startAngle', 'endAngle', 'padAngle');

    return pie()
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padAngle(padAngle)
      .value(valueAccessor);
  }),

  arc: computed('innerRadius', 'outerRadius', 'cornerRadius', function() {
    const {
      cornerRadius,
      innerRadius,
      outerRadius,
    } = getProperties(this, 'cornerRadius', 'innerRadius', 'outerRadius');

    return arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius);
  }),

  colorScale: computed('data', 'colorInterpolator', 'colorRange', function() {
    const {
      data,
      colorInterpolator,
      colorRange,
    } = getProperties(this, 'data', 'colorInterpolator', 'colorRange');
    const domain = [0, data.length];

    if (colorRange) {
      return scaleOrdinal()
        .domain(domain)
        .range(colorRange);
    }

    return scaleSequential(colorInterpolator)
      .domain(domain);
  }),

  slices: computed('data', 'pie', 'arc', 'colorScale', function() {
    const { data, pie, arc, colorScale } = getProperties(this, 'data', 'pie', 'arc', 'colorScale');
    const pieData = pie(data);

    const slices = pieData.map((d, i) => ({
      color: colorScale(i),
      value: arc(d),
    }));

    return slices;
  }),
});
