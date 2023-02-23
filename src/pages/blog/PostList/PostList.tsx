import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { deletePost, startEditPost } from '../blog.reducer'
import PostItem from '../PostItem'

function PostList() {
  const { postList } = useSelector((state: RootState) => state.blogReducer)
  const dispatch = useDispatch()
  const handleDeletePost = (postId: string) => {
    dispatch(deletePost(postId))
  }
  const handleEditPost = (postId: string) => {
    dispatch(startEditPost(postId))
  }
  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Ken Blog</h2>
            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            {postList &&
              postList.map((post, index) => {
                return <PostItem post={post} handleDeletePost={handleDeletePost} handleEditPost={handleEditPost} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList
