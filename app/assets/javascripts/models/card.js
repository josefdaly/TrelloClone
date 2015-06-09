TrelloClone.Models.Card = Backbone.Model.extend({
  model: TrelloClone.Models.List,
  urlRoot: '/api/cards',
  items: function () {
    if(!this._items) {
      this._items = new TrelloClone.Collections.Items([], { Card: this })
    }

    return this._items;
  },
  parse: function (response) {
    if (response.items) {
      this.items().set(response.items)
    }
    return response;
  }
});
