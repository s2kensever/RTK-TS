import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'consts/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  postEdit: Post | null
}

const initialState: BlogState = {
  postList: initalPostList,
  postEdit: null
}
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<String>('blog/deletePost')
export const startEditPost = createAction<String>('blog/startEditPost')
export const cancelEdit = createAction('blog/cancelEdit')
export const editPost = createAction<Post>('blog/editPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditPost, (state, action) => {
      const findPost = state.postList.find((post) => post.id === action.payload) || null
      state.postEdit = findPost
    })
    .addCase(cancelEdit, (state) => {
      state.postEdit = null
    })
    .addCase(editPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.postEdit = null
    })
})

export default blogReducer
