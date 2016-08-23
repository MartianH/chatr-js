Template.mainLayout.events({
    'click #a-logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
            else {
                FlowRouter.go('/login');
            }
        })
    }
});