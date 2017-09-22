import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsItem extends Component {
  render() {
    if (!this.props.news_item) {
      return <div></div>
    }

    return (
      <div>
        <img src={this.props.news_item.image} width='400px'></img>
        <h3>{this.props.news_item.title}</h3>
        <h5>{this.props.news_item.date}</h5>
        <p>{this.props.news_item.teaser}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news_item: state.selectedNews
  }
}

export default connect(mapStateToProps)(NewsItem);
