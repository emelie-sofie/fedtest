import { combineReducers } from 'redux';
import NewsReducer from '../js/reducer_news';
import SelectedNews from '../js/reducer_selected_news';

const rootReducer = combineReducers({
  news: NewsReducer,
  selectedNews: SelectedNews 
});

export default rootReducer;
