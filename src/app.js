import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <div>
      <Header />
      <List />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
