import Ember from 'ember';
import { extent as d3Extent } from 'd3-array';

const { Helper: { helper } } = Ember;

export function extent([array, accessor]) {
  if (accessor) {
    return d3Extent(array, accessor);
  }
  return d3Extent(array);
}

export default helper(extent);
