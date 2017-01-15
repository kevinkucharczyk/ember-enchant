import Ember from 'ember';
import aapl from 'dummy/data/aapl';
import googl from 'dummy/data/googl';

const {
  Route,
  get,
  set,
} = Ember;

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
