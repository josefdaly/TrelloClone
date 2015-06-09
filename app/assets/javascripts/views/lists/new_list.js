TrelloClone.Views.NewList = Backbone.View.extend({
  initialize: function () {},
  template: JST['lists/new_list'],
  tagName: 'li',
  className: 'panel panel-default new-list',
  events: {
    "click .add-button": "addList",
    // "click .add-button": "emptyFields"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  addList: function(event) {
    event.preventDefault();
    var newTitle = this.$('.add-list').val();
    var newList = new TrelloClone.Models.List({
       'title': newTitle,
       'board_id': this.model.id,
       'ord': this.model.lists().length
    });
    newList.save({}, {
      success: function () {
        this.model.lists().add(newList);
      }.bind(this)
    });
    $listTitle = $('input.add-list').val("");
  },
});
