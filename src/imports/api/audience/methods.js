import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Audience } from './audience';

Meteor.methods({
    'newAudienceMember': (name) => {
        check(name, String);

        const AudienceRoster = Audience.find({name: name}).count();

        if (AudienceRoster > 0) {
            throw new Meteor.Error(400, 'Audience member name already exists.')
        } else {
            const now = new Date();

            return Audience.insert({
                name,
                createdAt: now
            });
        }
    }
});