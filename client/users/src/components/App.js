import React from "react";
// import logo from './logo.svg';
import TopBar from "./TopBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AlbumsContainer from "./AlbumsContainer";
import "../styles/App.css";

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Route path='/albums' component={AlbumsContainer} />
    </div>
  </div>
);

export default App;
