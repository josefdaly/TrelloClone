TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['lists/show'],
  tagName: 'li',
  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  },
});
