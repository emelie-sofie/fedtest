import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsItem from './news-item';

class NewsList extends Component {

  constructor() {
    super();
    this.showMore = this.showMore.bind(this);
    this.state = {
      limit: 4,
      showMore: true
    };
  }

  render() {
    return (
      <div className="all-news-container">
        <div className="news-container">
          {this.renderList()}
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>
    );
  }

  renderList() {
    var initialLoad = this.props.news.slice(0, this.state.limit);

    return initialLoad.map(news_item => {
      return (
        <NewsItem
          key={news_item.title}
          news_item={news_item}
        />
      );
    });
  }

  renderButton() {
    // show button only if state.showMore set to true
    if (!this.state.showMore) return null;
    return (
      <button
        onClick={this.showMore}
        className="show-more-news-button">
        VISA FLER NYHETER
      </button>
    );
  }

  showMore() {
    this.setState({
      showMore: false,
      limit: this.props.news.length
    });
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  // For selecting one particular article
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
