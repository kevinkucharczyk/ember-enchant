import Ember from 'ember';
import { scaleTime as d3ScaleTime } from 'd3-scale';

const { Helper: { helper } } = Ember;

export function scaleTime([domain, range]) {
  return d3ScaleTime()
    .domain(domain)
    .range(range);
}

export default helper(scaleTime);
