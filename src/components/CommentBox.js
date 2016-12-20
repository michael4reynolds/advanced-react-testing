import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  }

  render() {
    return (
      <div className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button>Submit Comment</button>
      </div>
    );
  }
}

export default CommentBox;
