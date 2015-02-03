Template['NewBoat-calendar'].helpers({
	 calendar: function () {
        var formData = AutoForm.getFieldValue('calendarBoatForm', 'alwaysAvailable');
        console.log( formData)
        return formData;
    },
});

Template['NewBoat-calendar'].events({
	'submit form' : function() {
		console.log("Submitte form");
		var formData = AutoForm.getFormValues('calendarBoatForm').insertDoc;
        console.log("Form data ", formData)
	},
	'click .always-available' : function () {
        console.log("Always available")
       // $('.open-always-available').click();
     },
    'click .always-unavailable' : function () {
        console.log("Always unavailable")
        //$('.open-always-unavailable').click();
     },
     // $('.datepicker-days').find('.active')
});


Template['NewBoat-calendar'].rendered = function() {
	console.log("Rendered Calendar");
    $('.input-group').datepicker({
		    multidate: true,
		    startDate: "today"
	});

	
}