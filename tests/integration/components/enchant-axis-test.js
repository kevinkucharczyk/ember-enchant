import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { set } = Ember;

moduleForComponent('enchant-axis', 'Integration | Component | enchant axis', {
  integration: true,
});

test('it renders', function(assert) {
  set(this, 'domain', [1, 2, 3, 4, 5]);
  set(this, 'range', [1, 50]);

  this.render(hbs`{{enchant-axis
    scale=(scale-linear domain range)
    orient='bottom'
    width=800
    height=400
    ticks=5}}`);

  assert.equal(this.$('path').length, 1, 'renders axis path');

  assert.equal(this.$('text').length, 5, 'renders ticks');
});
