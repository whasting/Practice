import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = username => dispatch => (
  APIUtil.fetchPosts( username ).then( posts => (
    dispatch( receivePosts( posts ) )
  ))
);
