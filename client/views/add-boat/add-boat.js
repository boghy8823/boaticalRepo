Template['add-boat'].helpers({
 boatCapacity: function () {
        var formData = AutoForm.getFieldValue('insertBookForm', 'capacity');
        console.log( formData)
        return formData;
    },
boatType: function () {
        var formData = AutoForm.getFieldValue('insertBookForm', 'boatType');
        console.log( formData)
        return formData;
    },
boatLength: function () {
        var formData = AutoForm.getFieldValue('insertBookForm', 'length');
        console.log( formData)
        return formData;
    },
boatLocation: function () {
        var formData = AutoForm.getFieldValue('insertBookForm', 'location');
        console.log( formData)
        return formData;
    }
});

Template['add-boat'].events({
	'submit form' : function() {
		var formData = AutoForm.getFormValues('insertBookForm').insertDoc;
        console.log("Form data ", formData)
		if ( formData.boatType && formData.length && formData.capacity && formData.location ) {
			Router.go('dashboard.my-boats.manage-boats'); 	
		}
	}
});
