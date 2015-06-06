TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
  },

  routes: {
    "" : "boardsIndex",
    "boards/:id" : "boardShow"
  },

  boardsIndex: function () {
    var boards = this.collection;
    boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: boards});
    this.$rootEl.html(view.render().$el);
  },

  boardShow: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({model: board});
    this.$rootEl.html(view.render().$el);
  }
});
