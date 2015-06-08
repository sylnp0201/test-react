"use strict";

var React = require('react');
var Comment = require('../Comment/Comment');
var template = require('./CommentListTemplate');

var CommentList = React.createClass({
  commentNodes: function() {
    return this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });
  },

  render: function() {
    var commentNodes = this.commentNodes();
    return template.bind(this)(commentNodes);
  }
});

module.exports = CommentList;
