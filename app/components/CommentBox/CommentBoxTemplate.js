var React = require('react');

module.exports = function() {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      {this.commentList}
      {this.commentForm}
    </div>
  );
};
