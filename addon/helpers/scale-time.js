import { helper } from 'ember-helper';
import { scaleTime as d3ScaleTime } from 'd3-scale';

export function scaleTime([domain, range]) {
  return d3ScaleTime()
    .domain(domain)
    .range(range);
}

export default helper(scaleTime);
