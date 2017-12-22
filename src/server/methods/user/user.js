import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    createNewUser: ( name ) => {
      Accounts.createUser({username: name});
    }
  });