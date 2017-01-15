import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { set } = Ember;

moduleForComponent('enchant-line', 'Integration | Component | enchant line', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  set(this, 'xDomain', [0, 10]);
  set(this, 'xRange', [0, 800]);
  set(this, 'yDomain', [0, 100]);
  set(this, 'yRange', [0, 400]);
  set(this, 'data', [[0, 50], [5, 50], [10, 50]]);

  this.render(hbs`{{enchant-line
    xScale=(scale-linear xDomain xRange)
    yScale=(scale-linear yDomain yRange)
    data=data
    width=800
    height=400}}`);

  assert.equal(this.$().text().trim(), '');
});
