import { map, path } from 'ramda';
import redditResponse from '../seeds/entries';
import redditResponseFormatter from './utils/reddit-response-formatter';

/*
 * Retrieve top 50 reddit entries
 * @return {Array} List of formatted entries
 */
export function getEntries() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const entries = map(redditResponseFormatter, path(['data', 'children'], redditResponse));
      resolve(entries);
    }, 1000);
  });
}
