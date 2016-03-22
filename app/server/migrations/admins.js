Meteor.startup(function () {
  if (Admin.find({}).count() === 0) {
    console.log('Starting Admin Migration');
    let defaultAdmins = ['admin'];
    for (let admins in defaultAdmins) {
      let admin = {username: defaultAdmins[admins]};
      Admin.insert(admin);
    }
  }
//Creates Default admin account
  if (Meteor.users.find({}).count() === 0) {
    if (Admin.find({}).count()) {
      console.log('Default Admins were set, Adding Admin Accounts');
      Accounts.createUser({
        email:'admin@admin.com',
        password: "password",
        profile: {firstName: 'Super', lastName: "Admin"}
      });
    }
  }
});

