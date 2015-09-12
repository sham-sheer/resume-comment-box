var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        Hello, world! I am a react js comment list component!
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
      <div className="commentForm">
        Hello, world! I am a react js comment form component!
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
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
        <CommentForm />
      </div>
    );
  }

});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
