FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "channelList"});
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