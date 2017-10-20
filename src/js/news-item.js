import React from 'react'

const NewsItem = ({news_item}) => {
  if (!news_item) {
    return <div>Loading...</div>
  }
  return (
    <article
      className="news-item"
      key={news_item.title}>
      <img
        src={news_item.image}
        className="img">
      </img>
      <section className="intro">
        <header>
          <h2 className="uppercase news-title">{news_item.title}</h2>
          <div className="hr"></div>
          <h5 className="uppercase news-date">{news_item.date}</h5>
        </header>
        <p>{news_item.teaser}</p>
        <button
          className="show-more-button">
          LÄS MER ＞
        </button>
      </section>
    </article>
  )
}
export default NewsItem
