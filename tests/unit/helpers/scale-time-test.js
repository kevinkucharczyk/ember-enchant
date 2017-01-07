import { scaleTime } from 'dummy/helpers/scale-time';
import { module, test } from 'qunit';

module('Unit | Helper | scale time');

test('correctly calculates time scale', function(assert) {
  const domain = [
    new Date(2000, 0, 1),
    new Date(2000, 0, 2),
  ];
  const range = [0, 1];
  const scale = scaleTime([domain, range]);
  const result = scale(new Date(2000, 0, 1, 12));
  assert.equal(result, 0.5);
});
