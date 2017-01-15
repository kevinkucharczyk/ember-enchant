import Ember from 'ember';
import { scaleLinear as d3ScaleLinear } from 'd3-scale';

const { Helper: { helper } } = Ember;

export function scaleLinear([domain, range]) {
  return d3ScaleLinear()
    .domain(domain)
    .range(range);
}

export default helper(scaleLinear);
