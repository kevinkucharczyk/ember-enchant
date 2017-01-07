import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-axis', 'Integration | Component | enchant axis', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enchant-axis}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enchant-axis}}
      template block text
    {{/enchant-axis}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
