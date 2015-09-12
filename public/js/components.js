var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return(
      <div className="commentList">
        {commentNodes}
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
    //For this example, this workarround tells to React that the html injected is secure.
    //Otherwise, the output will not render the html markup.
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }

});
React.render(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);
