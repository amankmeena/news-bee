import './App.css';

import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>

        <BrowserRouter>
          <Navbar />

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Routes>
            {/* <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setProgress} key="general" country="us" category="general" />} /> */}

            <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setProgress} key="world" country="us" category="world" />} />
            
            <Route exact path="/business" element={<News apikey={this.apikey} setprogress={this.setProgress} key="business" country="us" category="business" />} />
            
            {/* <Route exact path="/entertainment" element={<News apikey={this.apikey} setprogress={this.setProgress} key="entertainment" country="us" category="entertainment" />} /> */}
            
            {/* <Route exact path="/health" element={<News apikey={this.apikey} setprogress={this.setProgress} key="health" country="us" category="health" />} /> */}
            
            <Route exact path="/science" element={<News apikey={this.apikey} setprogress={this.setProgress} key="science" country="us" category="science" />} />
            
            <Route exact path="/sports" element={<News apikey={this.apikey} setprogress={this.setProgress} key="sports" country="us" category="sport" />} />
            
            <Route exact path="/technology" element={<News apikey={this.apikey} setprogress={this.setProgress} key="technology" country="us" category="technology" />} />

            {/* <Route exact path="/nation" element={<News apikey={this.apikey} setprogress={this.setProgress} key="nation" country="us" category="nation" />} /> */}

            <Route exact path="/environment" element={<News apikey={this.apikey} setprogress={this.setProgress} key="environment" country="us" category="environment" />} />

            <Route exact path="/culture" element={<News apikey={this.apikey} setprogress={this.setProgress} key="culture" country="us" category="culture" />} />

            <Route exact path="/politics" element={<News apikey={this.apikey} setprogress={this.setProgress} key="politics" country="us" category="politics" />} />

            <Route exact path="/fashion" element={<News apikey={this.apikey} setprogress={this.setProgress} key="fashion" country="us" category="fashion" />} />

            <Route exact path="/about" element={<About />} />
          </Routes>

        </BrowserRouter>
      </>
    )
  }
}