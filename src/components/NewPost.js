import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';

const NewPost = ({title, body, author, posts, dispatch }) => {

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { title: title, body: body, author: author };
    dispatch({type: "ADD_POST", newPost: newPost })

    // console.log(posts);
  }

  return (
    <>
      <form onSubmit={addPost}>
        <p>Title:</p>
        <input type="text" defaultValue={title}></input>
        <p>Body:</p>
        <input type="text" defaultValue={body}></input> 
        <p>Author:</p>
        <input type="text" defaultValue={author}></input>
        <br />
        <button>Submit Post</button>
      </form>
    </>
  )
};

export default connect(mapStateToProps)(NewPost);