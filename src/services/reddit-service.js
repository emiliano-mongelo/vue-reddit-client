import axios from "axios";
import { compose, map, path } from "ramda";
import redditResponseFormatter from "./utils/reddit-response-formatter";

const getFormattedEntries = compose(
  map(redditResponseFormatter),
  path(["data", "data", "children"])
);

/*
 * Retrieve top 50 reddit entries
 * @return {Array} List of formatted entries
 */
export function getEntries(after) {
  let endpoint = "https://www.reddit.com/r/news/top.json?limit=10";
  if (after) {
    endpoint = `${endpoint}&after=${after}`;
  }
  return axios.get(endpoint, { responseType: "json" }).then(res => {
    if (res.status !== 200) {
      return [];
    }

    return {
      entries: getFormattedEntries(res),
      after: path(["data", "data", "after"], res)
    };
  });
}
