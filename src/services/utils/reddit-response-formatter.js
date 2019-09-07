import { always, applySpec, compose, prop } from 'ramda';

const redditResponseFormatter = compose(
  applySpec({
    id: prop('id'),
    author: prop('author'),
    thumbnail: prop('thumbnail'),
    title: prop('title'),
    comments: prop('num_comments'),
    unread: always(true)
  }),
  prop('data')
);

export default redditResponseFormatter;
