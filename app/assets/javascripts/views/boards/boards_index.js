TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    var that = this;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removeBoardIndexItem)
    this.listenTo(this.collection, 'add', this.addBoardView);
    this.addNewBoard();
    this.collection.each(function (board) {
      this.addBoardView(board)
    }.bind(this));
  },
  template: JST['boards/index'],
  tagName: 'div',
  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addBoardView: function (board) {
    var boardIndexItem = new TrelloClone.Views.BoardsIndexItem({model: board})
    this.addSubview('ol', boardIndexItem);
  },
  addNewBoard: function() {
    var newBoard = new TrelloClone.Views.NewBoard({ collection: this.collection });
    this.addSubview('div.create-new', newBoard);
  },
  removeBoardIndexItem: function(model) {
    this.removeModelSubview('ol', model);
  }
});
