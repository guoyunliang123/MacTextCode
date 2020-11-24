define(['./util.js'], function(util) {
  var aUtil = {
    aGetFormaDate: function(date) {
      return util.getFormtaDate(date, 2)
    }
  };
  return aUtil;
})