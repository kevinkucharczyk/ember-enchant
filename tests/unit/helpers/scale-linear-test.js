import { scaleLinear } from 'dummy/helpers/scale-linear';
import { module, test } from 'qunit';

module('Unit | Helper | scale linear');

test('correctly calculates linear scale', function(assert) {
  const domain = [0, 10];
  const range = [0, 1];
  const scale = scaleLinear([domain, range]);
  assert.equal(scale(2), 0.2);
});

