import React, { Component } from "react";
import "./saved.css";
import API from "../../utils/API";
import { SavedList, SavedItem } from "../../components/SavedList";
import NoResults from "../../components/NoResults";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentWillMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getSavedArticles().then(response => {
      this.setState({ savedArticles: response.data });
    });
  };

  handleDeleteArticle = article_id => {
    API.removeArticle(article_id).then(response => this.loadSavedArticles());
  };

  render() {
    return (
      <div className="saved">
        {!this.state.savedArticles.length ? (
          <NoResults />
        ) : (
          <SavedList>
            {this.state.savedArticles.map(article => {
              return (
                <SavedItem
                  key={article._id}
                  headline={article.headline}
                  byline={article.byline}
                  snippet={article.snippet}
                  pub_date={article.pub_date}
                  url={article.url}
                  onDeleteArticle={() => this.handleDeleteArticle(article._id)}
                />
              );
            })}
          </SavedList>
        )}
      </div>
    );
  }
}

export default Saved;
