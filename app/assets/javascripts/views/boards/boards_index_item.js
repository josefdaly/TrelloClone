TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  events: {
    'click button.delete-board': 'deleteBoard'
  },
  template: JST['boards/index_item'],
  tagName: 'li',
  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },
  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
