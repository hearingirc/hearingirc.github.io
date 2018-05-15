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
      "closes": "2016-08-22T16:00:00.000Z"
    },
    "2017": {
      "opens": "2017-05-01T00:00:00.000Z",
      "closes": "2017-08-19T16:00:00.000Z"
    },
    "2018": {
      "opens": "2018-05-11T00:00:00.000Z",
      "closes": "2018-08-19T16:00:00.000Z"
    }
  };

  this.isAcceptingProposals = function() {
    var now = new Date();
    var annualDates = availabilityWindows[now.getFullYear()];
    return annualDates &&
           Date.parse(annualDates.opens) <= now &&
           Date.parse(annualDates.closes) >= now;
  };
}
