function RFPManager() {
  var availabilityWindows = {
    "2014": {
      "opens": "2013-07-01T00:00:00.000Z",
      "closes": "2013-10-01T00:00:00.000Z"
    }
  };

  this.isAcceptingProposals = function() {
    var now = new Date();
    var annualDates = availabilityWindows[now.getFullYear()];
    return Date.parse(annualDates.opens) <= now &&
           Date.parse(annualDates.closes) >= now;
  };
}
