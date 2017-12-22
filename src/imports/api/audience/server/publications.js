import { Meteor } from 'meteor/meteor';
import { Audience } from '../audience';

Meteor.publish('audience.all', () => {
    return Audience.find();
})