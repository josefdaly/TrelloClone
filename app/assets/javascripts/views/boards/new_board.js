TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST['boards/new_board'],
  tagName: 'li',
  className: 'new-board',
  events: {
    "click .add-button": "addBoard",
    "click": "showForm",
    // "mouseout": "hideForm"
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
        Backbone.history.navigate(
          'boards/' + newBoard.id, { trigger: true }
        );
      }.bind(this)
    });
    $('input.add-board').val("");
  },
  showForm: function(event) {
    event.preventDefault();
    var $el = $('.add-board-form-hidden');
    $el.removeClass('add-board-form-hidden');
    $el.addClass('add-board-form-show');
  },
  hideForm: function() {
    var $el = $('.add-board-form-show');
    $el.removeClass('add-board-form-show');
    $el.addClass('add-board-form-hidden');
  }
});
