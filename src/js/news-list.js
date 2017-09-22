import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNews } from '../js/index';
import { bindActionCreators } from 'redux';

class NewsList extends Component {
  renderList() {
    // Render the first 4 items, the rest when clicking more news..
    return this.props.news.map(news_item => {
      return (
        <div
          className="box"
          key={news_item.title}>
          <img
            //onClick={ () => this.props.selectNews(news_item) }
            src={news_item.image}
            className="img">
          </img>
          <div className="intro-div">
            <h3 className="uppercase">{news_item.title}</h3>
            <hr />
            <br />
            <h5 className="uppercase">{news_item.date}</h5>
            <p>{news_item.teaser}</p>
            <button
              //onClick={ () => this.props.selectNews(news_item) }
              className="show-more-button">
              LÄS MER >
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="all-news-container">
        <div className="news-container">
          {this.renderList()}
        </div>
        <div className="more-news-container">
          <button
            //onClick={ () => this.props.something(something) }
            className="show-more-news-button">VISA FLER NYHETER</button>
          <div></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNews: selectNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
