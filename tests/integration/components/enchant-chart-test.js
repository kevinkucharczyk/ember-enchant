import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-chart', 'Integration | Component | enchant chart', {
  integration: true,
});

test('it renders an SVG element and yields block properly', function(assert) {
  this.render(hbs`
    {{#enchant-chart}}
      <text>Test</text>
    {{/enchant-chart}}
  `);

  assert.equal(this.$('svg').length, 1, 'svg is rendered');
  assert.equal(this.$('text').length, 1, 'block is rendered');
});
