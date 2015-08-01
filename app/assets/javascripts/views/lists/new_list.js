TrelloClone.Views.NewList = Backbone.View.extend({
  initialize: function () {},
  template: JST['lists/new_list'],
  tagName: 'li',
  className: 'new-board create-new new-list',
  events: {
    "click .add-button": "addList",
    // "click .add-button": "emptyFields",
    "click": "showForm"
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
  showForm: function(event) {
    event.preventDefault();
    var $el = $('.add-list-form-hidden');
    $el.removeClass('add-list-form-hidden');
    $el.addClass('add-board-form-show');
  }
});
