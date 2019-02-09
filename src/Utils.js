import moment from 'moment';

const getObjectValues = ojb => {
  return Object.keys(ojb || {}).map(key => ojb[key]);
}

const average = (array) => roundNumber(array.reduce((a, b) => a + b, 0) / array.length);

const getAverageDate = (array) => moment.unix(average(array.map(d => moment(d).unix()))).format("D MMM");

const roundNumber = (num) => Math.round((num + 0.00001) * 100) / 100;

export default {
  getObjectValues,
  average,
  getAverageDate,
  roundNumber,
};