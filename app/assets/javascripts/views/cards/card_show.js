TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: JST['cards/show'],
  events: {
    'click button.delete-card': 'deleteCard'
  },
  tagName: 'li',
  className: 'well',
  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    return this;
  },
  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }

});
