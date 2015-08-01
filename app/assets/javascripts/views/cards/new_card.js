TrelloClone.Views.NewCard = Backbone.View.extend({
  template: JST['cards/new_card'],
  tagName: 'li',
  className: 'card',
  events: {
    "click .add-card-button": "addCard"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  addCard: function(event) {
    event.preventDefault();
    var newTitle = this.$('.add-card-title').val();
    var newDescription = this.$('.add-card-description').val();

    var newCard = new TrelloClone.Models.Card({
       'title': newTitle,
       'description' : newDescription,
       'list_id': this.model.id,
       'ord': this.model.cards().length
    });
    newCard.save({}, {
      success: function () {
        this.model.cards().add(newCard);
      }.bind(this)
    });
    $('input.add-card-title').val("");
    $('textarea.add-card-description').val("");
  }
});
