Meteor.publish('Books', function () {
  return Books.find();
});
