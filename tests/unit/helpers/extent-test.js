import { extent } from 'dummy/helpers/extent';
import { module, test } from 'qunit';

module('Unit | Helper | extent');

test('correctly calculates extent', function(assert) {
  const result = extent([[5, 9, 2, 7]]);
  assert.deepEqual(result, [2, 9]);
});

test('correctly calculates extent with accessor', function(assert) {
  const data = [
    { value: 5 },
    { value: 9 },
    { value: 2 },
    { value: 7 },
  ];
  const accessor = datum => datum.value;
  const result = extent([data, accessor]);
  assert.deepEqual(result, [2, 9]);
});

test('returns undefined when array is empty', function(assert) {
  const result = extent([[]]);
  assert.deepEqual(result, [undefined, undefined]);
});
