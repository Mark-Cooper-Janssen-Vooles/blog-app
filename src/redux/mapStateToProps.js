const mapStateToProps = (state) => {
  return {
    title: state.reducerBlogPost.title,
    body: state.reducerBlogPost.body,
    author: state.reducerBlogPost.author,
    posts: state.reducerBlog.posts
  }
}

export default mapStateToProps;