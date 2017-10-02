import { combineReducers } from 'redux'
import NewsReducer from '../reducers/reducer_news'

const rootReducer = combineReducers({
  news: NewsReducer,
})

export default rootReducer 
