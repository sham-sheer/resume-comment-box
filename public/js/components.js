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
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();

    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name please..." ref="author" />
        <input type="text" placeholder="Your comment..." ref="text" />
        <input type="submit" value="Post"/>
      </form>
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
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    //Do not wait until the request is finished. Add the comment on the list right
    //after its inclusion.
    var currentComments = this.state.data;
    var newComments = currentComments.concat([comment]);
    this.setState({data: newComments});

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }

});
React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
