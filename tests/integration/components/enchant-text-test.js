import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-text', 'Integration | Component | enchant text', {
  integration: true,
});

test('it renders', function(assert) {
  this.render(hbs`{{enchant-text value='Date'}}`);

  assert.equal(this.$().text().trim(), 'Date');
});
