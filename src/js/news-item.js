import React from 'react';

const NewsItem = ({news_item}) => {
  if (!news_item) {
    return <div>Loading...</div>;
  }
  return (
      <div
        className="box"
        key={news_item.title}>
        <img
          src={news_item.image}
          className="img">
        </img>
        <div className="intro-div">
          <h2 className="uppercase news-title">{news_item.title}</h2>
          <hr />
          <br />
          <h5 className="uppercase news-date">{news_item.date}</h5>
          <p>{news_item.teaser}</p>
          <button
            className="show-more-button">
            LÄS MER ＞
          </button>
        </div>
      </div>
    )
};
export default NewsItem;
