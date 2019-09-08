import redditResponseFormatter from './reddit-response-formatter';

describe('redditResponseFormatter', () => {
  test('should return a formatted entry', () => {
    const payload = {
      "kind": "t3",
      "data": {
        "domain": "alphagalileo.org",
        "banned_by": null,
        "media_embed": {},
        "subreddit": "science",
        "selftext_html": null,
        "selftext": "",
        "likes": null,
        "user_reports": [],
        "secure_media": null,
        "link_flair_text": "Social Sciences",
        "id": "2hozly",
        "gilded": 0,
        "secure_media_embed": {},
        "clicked": false,
        "report_reasons": null,
        "author": "mubukugrappa",
        "media": null,
        "score": 4498,
        "approved_by": null,
        "over_18": false,
        "hidden": false,
        "thumbnail": "",
        "subreddit_id": "t5_mouw",
        "edited": false,
        "link_flair_css_class": "soc",
        "author_flair_css_class": null,
        "downs": 0,
        "mod_reports": [],
        "saved": false,
        "is_self": false,
        "name": "t3_2hozly",
        "permalink": "/r/science/comments/2hozly/the_secret_to_raising_well_behaved_teens_maximise/",
        "stickied": false,
        "created": 1411937584,
        "url": "http://www.alphagalileo.org/ViewItem.aspx?ItemId=145707&amp;CultureCode=en",
        "author_flair_text": null,
        "title": "The secret to raising well behaved teens? Maximise their sleep: While paediatricians warn sleep deprivation can stack the deck against teenagers, a new study reveals youth’s irritability and laziness aren’t down to attitude problems but lack of sleep",
        "created_utc": 1411908784,
        "ups": 4498,
        "num_comments": 3740,
        "visited": false,
        "num_reports": null,
        "distinguished": null
      }
    };

    expect(redditResponseFormatter(payload)).toMatchObject({
        id: "2hozly",
        author: "mubukugrappa",
        createdDate: 1411908784,
        thumbnail: "",
        title: "The secret to raising well behaved teens? Maximise their sleep: While paediatricians warn sleep deprivation can stack the deck against teenagers, a new study reveals youth’s irritability and laziness aren’t down to attitude problems but lack of sleep",
        comments: 3740,
        unread: true
      })
  });
});
