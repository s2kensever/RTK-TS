import React from 'react'
import CreatePost from './CreatePost'
import PostList from './PostList'

function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}

export default Blog
