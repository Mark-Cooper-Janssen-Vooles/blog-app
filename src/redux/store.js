import {createStore, combineReducers} from 'redux';

const initialStateBlogPost = { title: "me", body: "lkjjlk", author: "kk" };
const reducerBlogPost = (state = initialStateBlogPost, action) => {
    switch(action.type) {
      default: 
        return state;
    };
};

const initialStateBlog = { posts: [{title: "hmm", body: "ok", author: "alright"}] };
const reducerBlog = ( state = initialStateBlog, action) => {
  switch(action.type) {
    case "ADD_POST":
      const newPostsArr = state.posts;
      newPostsArr.push(action.newPost);
      return {
        ...state, posts: newPostsArr
      };
    default: 
      return state;
  };
};

const store = () => {
  return createStore( combineReducers({reducerBlogPost, reducerBlog}) );
};

export default store;