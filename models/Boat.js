Boat = new Mongo.Collection('Boat');

Boat.attachSchema(
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
      label: "Capacity  "
    },
    alwaysAvailable: {
    type: String,
   
      autoform: {
        afFieldInput: {
          type: "date"
        }
      }
    },
    alwaysUnavailable: {
    type: String,
   
      autoform: {
        afFieldInput: {
          type: "date"
        }
      }
    },
    location: {
      type: String,
      label: "Location  "
    },
    currency: {
      type: Number,
      allowedValues: ["Eur", "USD"]
    },
    basicWeeklyPrice: {
      type: Number,
      label: "Weekly Price"
    },
    basicDailyPrice: {
      type: Number,
      label: "Daily Price"
    },
    basicWeekendPrice: {
      type: Number,
      label: "weekendPrice"
    },
    seasonStartDate: {
    type: Date,
      autoform: {
        afFieldInput: {
          type: "date"
        }
      }
    },
    seasonEndDate: {
    type: Date,
      autoform: {
        afFieldInput: {
          type: "date"
        }
      }
    },
    seasonalWeeklyPrice: {
      type: Number,
      label: "Weekly Price"
    },
    seasonalDailyPrice: {
      type: Number,
      label: "Daily Price"
    },
    seasonalWeekendPrice: {
      type: Number,
      label: "weekendPrice"
    },
    includedCrew: {
    type: String,
    autoform: {
      type: "select-checkbox-inline",
      options: function () {
        return [
          {label: "Skipper", value: 2013},
          {label: "Chef", value: 2014},
          {label: "Hostess", value: 2015},
          {label: "Crew", value: 2016}
        ];
      }
    }
  },
  skipperRate: {
    type: Number,
    label: "Skipper Rate"
  },
  pricingPeriod : {
    type: String,
      allowedValues: ["Per Day","Per Week"]
    },
  cleaningFee: {
    type: String,
    label: "Cleaning Fee"
  },
  securityDeposit: {
    type: String,
    label: "Security Deposit"
  },
  apaFee: {
    type: String,
    label: "A.P.A Fee"
  },
  boatTitle: {
    type: String,
    label: "Title"
  },
  boatSummary: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  boatBrand: {
    type: String,
    label: "Brand"
  },
  boatModel: {
    type: String,
    label: "Model"
  },
  boatBuildYear: {
    type: Number,
    label: "Build Year"
  },
  boatTotalCapacity : {
      type: String,
      allowedValues: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]
  },
  boatCabins : {
      type: String,
      allowedValues: ["1","2","3","4","5","6","7","8","9","10"]
  },
  boatBathrooms : {
      type: String,
      allowedValues: ["1","2","3","4","5","6","7","8","9","10"]
  },
  boatPhotos: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "file"
      }
    }
  },
  boatFlag : {
      type: String,
      allowedValues: ["United Kingdom","Greece","USA"]
  },
  boatName: {
    type: String,
    label: "Boat Name"
  },
  boatRegistrationNumber: {
    type: String,
    label: "Registration Number"
  },
  loydRegistered: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Boat.allow({
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
