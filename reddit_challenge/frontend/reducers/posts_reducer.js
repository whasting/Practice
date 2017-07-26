import merge from 'lodash/merge';

import {
  RECEIVE_POSTS
} from '../actions/post_actions';

const PostsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch( action.type ) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    default:
      return state;
  }
};

export default PostsReducer;
