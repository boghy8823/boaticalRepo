Template['messages'].helpers({
});

Template['messages'].events({
	'click .dashboard' : function () {
    	Router.go('dashboard') 
     },
     'click .messages' : function () {
        Router.go('dashboard.messages') 
     },
     'click .boats' : function () {
    	Router.go('dashboard.my-boats') 
     },
     'click .bookings' : function () {
    	Router.go('dashboard.my_jobs') 
     },	
     'click .profile' : function () {
    	Router.go('dashboard.my_trips') 
     },
     'click .account' : function () {
    	Router.go('dashboard.account') 
     },
});
