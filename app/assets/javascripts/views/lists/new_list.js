TrelloClone.Views.NewList = Backbone.View.extend({
  template: JST['lists/new_list'],
  tagName: 'li',
  events: {
    "click .add-button": "addList"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  addList: function(event) {
  }
});
