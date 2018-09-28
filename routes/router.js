const router = require("express").Router();
const axios = require("axios");
const db = require("../models");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

router.get("/search", (req, res) => {
  axios
    .get(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${
        process.env.APIKEY
      }`,
      { params: req.query }
    )
    .then(({ data: { response } }) => res.json(response.docs))
    .catch(err => console.log(err));
});

router.get("/articles", (req, res) => {
  db.Article.find()
    .then(dbArticles => res.send(dbArticles))
    .catch(err => console.log(err));
});

router.post("/articles", (req, res) => {
  db.Article.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.send(err));
});

router.delete("/articles/:id", (req, res) => {
  db.Article.deleteOne({ _id: req.params.id })
    .then(response => res.send(response))
    .catch(err => console.log(err));
});

module.exports = router;
