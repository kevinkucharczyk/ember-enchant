import { helper } from 'ember-helper';
import { scaleLinear as d3ScaleLinear } from 'd3-scale';

export function scaleLinear([domain, range]) {
  return d3ScaleLinear()
    .domain(domain)
    .range(range);
}

export default helper(scaleLinear);
