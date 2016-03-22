Projects = new Mongo.Collection('project');
Projects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true,
    label: "Project Name"
  },
  supplier: {
    type: String,
    label: "Supplier"
  },
  receipt: {
    type: String,
    label: 'Type Of Reciept'

  },
  receiptNo: {
    type: String,
    label: 'Receipt No.'

  },
  items: {
    type: Array,
    optional: true,
  },
  'items.$': {
    type: Object
  },
  'items.$.name': {
    type: String,
    label: 'Item Name  ',
    autoform: {
      afFieldInput: {
        options: function () {
          var items = Items.find().fetch();
          var options = [];
          for (item in items) {
            var option = {label: items[item].name, value: items[item]._id};
            options.push(option)
          }
          return options;
        }
      }
    }
  },
  'items.$.qty': {
    type: Number,
    label: "Quantity",
  },
  'items.$.unit': {
    type: String,
    label: "Unit",
  }
}));
Projects.helpers({});

Projects.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
if (Meteor.isServer) {
  Projects.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
  Projects.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
