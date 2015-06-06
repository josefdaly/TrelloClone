TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.addNewList();
    this.model.lists().each(function (list) {
      this.addListView(list);
    }.bind(this));
  },
  template: JST['boards/show'],
  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addListView: function (list) {
    var newList = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('ul', newList);
  },
  addNewList: function () {
    var addList = new TrelloClone.Views.NewList();
    this.addSubview('ul', addList);
  }
});
