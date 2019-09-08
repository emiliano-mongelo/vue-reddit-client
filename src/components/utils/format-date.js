import moment from 'moment';

/**
 * Given an UTC date, returns a formatted date in a custom or relative format
 * @example
 *   formatDate({ts: 978318000}) // 2001-01-01T00:00:00
 *   formatDate({ts: 978318000, format: 'YYYYMMDD'}) // 20010101
 *   formatDate({ts: 978318000, relative: true}) // 19 years ago
 *
 * @function
 * @param {Object.Number} ts A unix timestamp in UTC
 * @param {Object.<Boolean>} relative Specifies if the returned value should have a relative format
 * @param {Object.<String>} format A custom format to be used
 * @returns {String} A string date with the given format or the default one
 */
const formatDate = ({ts, relative, format})  => {
  const mDate = moment.unix(ts);
  return relative ? mDate.fromNow() : mDate.format(format || '');
};

module.exports = formatDate;
