import React, { Component } from 'react';
import CommentBoxConnect from './CommentBox';
import CommentListConnect from './CommentList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBoxConnect />
        <CommentListConnect />
      </div>
    );
  }
}

export default App;
