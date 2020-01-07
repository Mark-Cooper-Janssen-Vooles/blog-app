import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';

const DisplayPosts = ({posts}) => {
  return (
    <div>
      <div>
        {`${posts}`}
      </div>
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
          </div>
        )
      })}
    </div>
  )
};

export default connect(mapStateToProps)(DisplayPosts);