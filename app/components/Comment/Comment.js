"use strict";

var React = require('react');
var template = require('./CommentTemplate');

var Comment = React.createClass({
  render: function() {
    this.render = template.bind(this);
    return this.render();
  }
});

module.exports = Comment;
