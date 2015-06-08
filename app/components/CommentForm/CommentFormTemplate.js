var React = require('react');

module.exports = function() {
  return (
    <form className="commentForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Your name" ref="author" />
      <input type="text" placeholder="Say something..." ref="text" />
      <input type="submit" value="Post" />
    </form>
  );
};
