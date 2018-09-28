import React, { Component } from "react";
import "./home.css";
import API from "../../utils/API";
import Form from "../../components/Form";
import NoResults from "../../components/NoResults";
import { ResultList, ResultItem } from "../../components/ResultList";

class Home extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    searchResults: [],
    reservedQuery: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const query = {
      q: this.state.topic.replace(" ", "+")
    };

    if (this.state.startYear) {
      query.begin_date = `${this.state.startYear}0101`;
    }
    if (this.state.endYear) {
      query.end_date = `${this.state.endYear}1231`;
    }

    console.log(query);

    API.searchForArticles(query)
      .then(({ data: results }) => {
        const newArray = [...results];

        newArray.length = 5;

        this.setState({ searchResults: newArray });
      })
      .catch(err => console.log(err));
  };

  handleSaveArticle = article => {
    API.saveArticle(article)
      .then(response => {
        if (response.data.errmsg) {
          console.log("Duplicate Key");
        }

        const newArray = this.state.searchResults.filter(searchResult => {
          return searchResult._id !== response.data.article_id;
        });

        this.setState({ searchResults: newArray });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="home">
        <Form
          onInputChange={this.handleInputChange}
          onFormSubmission={this.handleFormSubmission}
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
        />
        {!this.state.searchResults.length ? (
          <NoResults />
        ) : (
          <ResultList>
            {this.state.searchResults.map(result => {
              return (
                <ResultItem
                  key={result._id}
                  headline={result.headline.main}
                  byline={result.byline.original}
                  snippet={result.snippet}
                  pub_date={result.pub_date}
                  url={result.web_url}
                  onSaveArticle={() => this.handleSaveArticle(result)}
                />
              );
            })}
          </ResultList>
        )}
      </div>
    );
  }
}

export default Home;
