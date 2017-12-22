import "./login.html";
import { Cookies } from "meteor/ostrio:cookies";
import { Bert } from "meteor/themeteorchef:bert";

// TODO: add a dummy cookie to check that they're allowed in the user's browser

const cookies = new Cookies();

// TODO: need better routing / deeper structure to carry "logged in" users to the functionality page

Template.login.onCreated(() => {
  cookies.set('cookiesEnabled', true);

  if (cookies.get('audienceMemberId')) {
    console.log('audience member already exists!');
  } else {
    console.log('no audience member yet');
  }
});

Template.login.helpers({
  cookiesEnabled: () => {
    return cookies.get('cookiesEnabled');
  },
  audienceMemberLoggedIn: () => {
    if (cookies.get('audienceMemberId')) {
      return true;
    } else {
      return false;
    }
  },
});

Template.login.events({
  'click button': (e) => {
      e.preventDefault();
      const name = $('input').val();
    Meteor.call('newAudienceMember', name, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        cookies.set('audienceMemberId', res);
      }
    });
  },
  'click #leave': (e) => {
    e.preventDefault();
    cookies.remove('audienceMemberId');
  }
});
