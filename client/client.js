if (Meteor.isClient) {
    Template.messages.helpers({
        messages: function() {
            return Messages.find({}, { sort: { time: -1}});
        }
    });

    Template.registerHelper('arrayify',function(obj){
      var result = [];
      for (var key in obj) result.push({name:key,value:obj[key]});
      return result;
    });

    Template.messages.helpers({
      message: function () {
        var regex = /(\:\w+\:|\<[\/\\]?3|[\(\)\\\D|\*\$][\-\^]?[\:\;\=]|[\:\;\=B8][\-\^]?[3DOPp\@\$\*\\\)\(\/\|])(?=\s|[\!\.\?]|$)/ig
        var height = 20;
        var msg = this.message.replace(regex, function(char) {
            switch(char) {
                case ':smile:':
                case ':)':
                   return '<img src="emoji-smile.png" style="display:inline-block;" alt="smiley-face" height='+height+'>';
                   break;
                case ':sad:':
                case ':(':
                   return '<img src="emoji-sad.png" style="display:inline-block;" alt="sad-face" height='+height+'>';
                   break;
                case ':happy:':
                case ':D':
                   return '<img src="emoji-happy.png" style="display:inline-block;" alt="happy-face" height='+height+'>';
                   break;
                case ':mad:':
                case '>:(':
                   return '<img src="emoji-mad.png" style="display:inline-block;" alt="mad-face" height='+height+'>';
                   break;
                case ':silly:':
                case ':p':
                case ':P':
                   return '<img src="emoji-silly.png" style="display:inline-block;" alt="silly-face" height='+height+'>';
                   break;
                case ':wink:':
                case ';)':
                   return '<img src="emoji-wink.png" style="display:inline-block;" alt="wink-face" height='+height+'>';
                   break;
                case ':angry:':
                   return '<img src="emoji-angry.png" style="display:inline-block;" alt="angry-face" height='+height+'>';
                   break;
                case ':ninja:':
                   return '<img src="emoji-ninja.png" style="display:inline-block;" alt="ninja" height='+height+'>';
                   break;
                case ':sleep:':
                   return '<img src="emoji-sleep.png" style="display:inline-block;" alt="sleep" height='+height+'>';
                   break;
                case ':quiet:':
                   return '<img src="emoji-quiet.png" style="display:inline-block;" alt="quiet" height='+height+'>';
                   break;
                case ':laugh:':
                   return '<img src="emoji-laugh.png" style="display:inline-block;" alt="laugh" height='+height+'>';
                   break;
                case ':kiss:':
                   return '<img src="emoji-kiss.png" style="display:inline-block;" alt="kiss" height='+height+'>';
                   break;
                case ':ill:':
                   return '<img src="emoji-ill.png" style="display:inline-block;" alt="ill" height='+height+'>';
                   break;
            }
        }); 
        return msg;
      }
    });

    Template.input.events = {
      'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          if (Meteor.user()) {
            var name = Meteor.user().profile.name;
            var message = document.getElementById('message');
            if (message.value != '') {
              Messages.insert({
                name: name,
                profileImage: "http://graph.facebook.com/"+Meteor.user().services.facebook.id+"/picture/?type=large",
                message: message.value,
                time: Date.now(),
              });

              document.getElementById('message').value = '';
              message.value = '';
            }
          }
          else {
            swal({
              title: "Euhm...",
              text: "You're not logged in...",
              timer: 2000,
              showConfirmButton: false
            });
            FlowRouter.go('/login');
          }
          
        }
      }
    }
}
