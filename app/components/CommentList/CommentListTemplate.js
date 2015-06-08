var React = require('react');

module.exports = function(commentNodes) {
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
};
