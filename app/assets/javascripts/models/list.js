TrelloClone.Models.List = Backbone.Model.extend({
  model: TrelloClone.Models.List,
  urlRoot: "/api/lists",
  cards: function () {
    if(!this._cards) {
      this._cards = new TrelloClone.Collections.Cards([], { List: this })
      this._cards.comparator = 'ord'
    }

    return this._cards;
  },
  parse: function (response) {
    if (response.cards) {
      this.cards().set(response.cards, { parse: true })
    }
    return response;
  }
});
