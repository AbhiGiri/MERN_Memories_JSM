import React from 'react';
import Post from './Post/Post';
// import useStyle from './styles';
import {useSelector } from 'react-redux';

const Posts = () => {

  const posts = useSelector((state) => state.posts);
  // const classes = useStyle();
  console.log(posts);  
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  )
};

export default Posts;
