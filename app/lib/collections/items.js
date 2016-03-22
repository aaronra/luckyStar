Items = new Mongo.Collection('items');
Items.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  quantity: {
    type: Number
  },
  description: {
    type: String,
    label: 'Description'
  },
  price: {
    type: Number,
    optional: false
  }
}));
Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
