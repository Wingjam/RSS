
const getObjectValues = ojb => {
  return Object.keys(ojb || {}).map(key => ojb[key]);
}

export default {
  getObjectValues,
};