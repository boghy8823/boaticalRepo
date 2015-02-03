Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound'
});

AccountsTemplates.addField({
    _id: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    displayName: 'First Name',
    required: true,
    errStr: 'Your first name is required',
});

AccountsTemplates.addField({
    _id: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
    displayName: "Last Name",
    required: true,
    errStr: 'Your last name is required',
});
