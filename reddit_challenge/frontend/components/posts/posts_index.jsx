import React from 'react';
import PostIndexItem from './post_index_item';
import { values } from 'lodash';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts('wadermelon');
  }

  render() {
    const posts = values(this.props.posts);

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <PostIndexItem key={post.data.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}


export default PostsIndex;
