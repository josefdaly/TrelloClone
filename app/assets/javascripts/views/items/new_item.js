// TrelloClone.Views.NewItem = Backbone.View.extend({
//   template: JST['items/new_item'],
//   tagName: 'li',
//   events: {
//     "click .add-item-button": "addItem"
//   },
//   render: function () {
//     var content = this.template();
//     this.$el.html(content);
//     return this;
//   },
//   addItem: function (event) {
//     event.preventDefault();
//     var newTitle = this.$('.add-card-title').val();
//     var newItem = new TrelloClone.Models.Item({
//       'title': newTitle,
//       'card_id': this.model.id
//     });
//     newItem.save({}, {
//       success: function () {
//         this.model.items().add(newItem);
//       }.bind(this)
//     });
//   }
// });
