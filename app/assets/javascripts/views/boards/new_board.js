TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST['boards/new_board'],
  tagName: 'li',
  className: 'new-board',
  events: {
    "click .add-button": "addBoard"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  addBoard: function(event) {
    event.preventDefault();
    var newTitle = this.$('.add-board').val();
    var newBoard = new TrelloClone.Models.Board({
      'title': newTitle
    });
    newBoard.save({}, {
      success: function () {
        this.collection.add(newBoard);
      }.bind(this)
    });
    $('input.add-board').val("");
  }
});
