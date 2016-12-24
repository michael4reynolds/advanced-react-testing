import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return (
    <ul className="comment-list">{list}</ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);
