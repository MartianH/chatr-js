Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({
            requestPermissions: ['public_profile']
        }, function (err) {
            if (err) {
                throw new Meteor.Error(err.reason);
            }
            else {
                FlowRouter.go('/chat');
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});