import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentListConnect from './CommentList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentListConnect />
      </div>
    );
  }
}

export default App;
