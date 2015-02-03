Books = new Mongo.Collection('Books');

Books.attachSchema(
    new SimpleSchema({
    boatType : {
      type: String,
      allowedValues: ["Catamaran", "Sailing Boat", "Motor Boat", "Motor Yacht"]
    },  
    length: {
      type: Number,
      label: "Length(ft)"
    },
    capacity: {
      type: Number,
      label: "Capacity"
    },
    location: {
      type: String,
      label: "Location"
    },
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Books.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
