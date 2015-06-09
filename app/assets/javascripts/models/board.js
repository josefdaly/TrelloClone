TrelloClone.Models.Board = Backbone.Model.extend({

  model: TrelloClone.Models.Board,
  urlRoot: "/api/boards",
  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], { Board: this})
    }

    return this._lists;
  },
  parse: function (response) {
    if (response.lists) {
     this.lists().set(response.lists, { parse: true })
   }
   return response;
 }
});
