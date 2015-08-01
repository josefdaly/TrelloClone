TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCardView)
    this.listenTo(this.model.cards(), 'remove', this.removeCardView)
    this.addNewCard();
    this.model.cards().each( function (card) {
      this.addCardView(card);
    }.bind(this));
  },
  events: {
    'click button.delete-list': 'deleteList',
    // 'mouseover': 'addNewCard',
    // 'mouseout': 'removeCardView'
  },
  template: JST['lists/show'],
  tagName: 'li',
  className: 'list-show',
  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },
  addCardView: function (card) {
    var newCard = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview('ul.cards-index', newCard);
  },
  addNewCard: function () {
    event.preventDefault();
    var addCard = new TrelloClone.Views.NewCard({ model: this.model });
    this.addSubview('div.new-card', addCard);
  },
  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();
  },
  removeCardView: function (model) {
    this.removeModelSubview('ul.cards-index', model);
  }
});
