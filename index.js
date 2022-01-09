const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(), days);
  console.olog(`${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;)
};

module.exports = getDateAfterXDays;
