const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  article_id: { type: String, required: true, unique: true },
  headline: { type: String, required: true },
  pub_date: { type: String, required: true },
  byline: String,
  snippet: String,
  url: String
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
