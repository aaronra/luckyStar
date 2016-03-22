InventoryController = RouteController.extend({
  layoutTemplate: 'appLayout',
  waitOn: function () {
    return this.subscribe('items');
  },
  data: function () {
    return Items.find({});
  },
  listInventory: function () {
    this.render('Inventory');
  },
  AddInventory: function () {
    this.render('InventoryInsert');
  },

});
