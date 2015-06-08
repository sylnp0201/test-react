"use strict";

var React = require('react');
var CommentBox = require('./components/CommentBox/CommentBox');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
