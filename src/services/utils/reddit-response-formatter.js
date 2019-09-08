import { always, applySpec, compose, prop } from 'ramda';

/**
 * Models a Reddit entry with the specified properties
 *
 * @function
 * @param {Object} The original Reddit response of an entry
 * @returns {Object} The modeled object the UI needs
 */
const redditResponseFormatter = compose(
  applySpec({
    id: prop('id'),
    author: prop('author'),
    createdDate: prop('created_utc'),
    thumbnail: prop('thumbnail'),
    title: prop('title'),
    comments: prop('num_comments'),
    unread: always(true)
  }),
  prop('data')
);

export default redditResponseFormatter;
