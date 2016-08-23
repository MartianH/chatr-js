FlowRouter.route('/', {
  action: function() {
    if (Meteor.userId()) {
    	FlowRouter.go('/chat');
    }
    else {
    	FlowRouter.go('/login');
    }
  }
});

FlowRouter.route('/login', {
	name: 'login',
  	action: function() {
    	BlazeLayout.render("mainLayout", {content: "login"});
  }
});

FlowRouter.route('/chat', {
	name: 'chat',
	action: function() {
    	BlazeLayout.render("mainLayout", {content: "chat"});
  }
});