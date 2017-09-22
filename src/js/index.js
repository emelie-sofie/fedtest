export function selectNews(news_item) {
  console.log("news article selected ",news_item.title);

  return {
    type: 'NEWS_SELECTED',
    payload: news_item
  };
}
