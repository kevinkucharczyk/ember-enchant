import Ember from 'ember';
import aapl from 'dummy/data/aapl';
import googl from 'dummy/data/googl';

const {
  Route,
  get,
  set,
} = Ember;

const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const pieData = function(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      group: `group${i}`,
      value: getRandomInt(1, 10),
    });
  }
  return data;
};

export default Route.extend({
  model() {
    return {
      aapl: aapl.map(item => {
        return {
          date: new Date(item.date),
          close: item.close,
        };
      }),
      googl: googl.map(item => {
        return {
          date: new Date(item.date),
          close: item.close,
        };
      }),
      pie: pieData(5),
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    set(controller, 'currentModel', model.aapl);
    set(controller, 'yTicksCount', 6);
    set(controller, 'xTicksCount', 6);
  },

  actions: {
    setGoogl() {
      const currentModel = get(this, 'controller.model');
      set(this, 'controller.currentModel', currentModel.googl);
    },
    setAapl() {
      const currentModel = get(this, 'controller.model');
      set(this, 'controller.currentModel', currentModel.aapl);
    },
  },
});
