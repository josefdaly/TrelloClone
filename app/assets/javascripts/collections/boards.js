TrelloClone.Collections.Boards = Backbone.Collection.extend({

  model: TrelloClone.Models.Board,
  url: "/api/boards",
  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new TrelloClone.Models.Board({ id: id });
      model.fetch({
        success: function () {
          this.add(model);
        }.bind(this)
      });
    } else {
      model.fetch();
    }
    return model;
  }

});
