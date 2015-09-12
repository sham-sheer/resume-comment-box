var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        Hello, world! I am a react js comment list component!
      </div>
    );
  }
});

var CommentBox = React.createClass({

  render: function(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
      </div>
    );
  }

});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
