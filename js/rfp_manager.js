function RFPManager() {
  var availabilityWindows = {
    "2014": {
      "opens": "2014-05-05T00:00:00.000Z",
      "closes": "2014-08-16T00:00:00.000Z"
    },
    "2015": {
      "opens": "2015-05-01T00:00:00.000Z",
      "closes": "2015-08-17T00:00:00.000Z"
    },
    "2016": {
      "opens": "2016-06-14T00:00:00.000Z",
      "closes": "2016-08-22T12:00:00.000Z"
    }
  };

  this.isAcceptingProposals = function() {
    var now = new Date();
    var annualDates = availabilityWindows[now.getFullYear()];
    return Date.parse(annualDates.opens) <= now &&
           Date.parse(annualDates.closes) >= now;
  };
}
