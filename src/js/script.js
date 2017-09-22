/** Your js goes here **/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import NewsList from './news-list';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')
);
