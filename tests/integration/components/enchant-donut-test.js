import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { set } = Ember;

moduleForComponent('enchant-donut', 'Integration | Component | enchant donut', {
  integration: true,
});

test('renders arcs properly', function(assert) {
  const data = [
    {
      group: 'Group 1',
      value: '50',
    },
    {
      group: 'Group 2',
      value: '50',
    },
    {
      group: 'Group 3',
      value: '50',
    },
  ];

  set(this, 'data', data);

  this.render(hbs`{{enchant-donut
    data=data
    width=800
    height=400
    valueProperty='value' }}`);

  assert.equal(this.$('path').length, 3, 'renders the correct number of arcs');
});
