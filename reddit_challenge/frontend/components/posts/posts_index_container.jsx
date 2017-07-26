import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/post_actions';
import PostsIndex from './posts_index';

const mapStateToProps = ( state, { match } ) => {
  let posts = "";

  if ( state.posts.data ) {
    posts = state.posts.data.children;
  }

  return ({
    posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: username => dispatch(fetchPosts(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex);
