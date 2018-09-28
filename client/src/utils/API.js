const axios = require("axios");

export default {
  searchForArticles: function(query) {
    console.log(query);
    return axios.get("/api/search", {
      params: query
    });
  },

  getSavedArticles: function() {
    return axios.get("/api/articles");
  },

  saveArticle: function(article) {
    return axios.post("/api/articles", {
      article_id: article._id,
      headline: article.headline.main,
      pub_date: article.pub_date,
      byline: article.byline.original,
      snippet: article.snippet,
      url: article.web_url
    });
  },

  removeArticle: function(article_id) {
    return axios.delete("/api/articles/" + article_id);
  }
};
