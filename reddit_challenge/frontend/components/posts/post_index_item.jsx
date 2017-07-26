import React from 'react';

const PostIndexItem = ({ post }) => (
  <li className="post-index-item">
    <div className="post-title">
      {post.data.title}
    </div>
    <div className="post-score">
      {post.data.score}
    </div>
    <div className="post-link">
      {`http://www.reddit.com${post.data.permalink}`}
    </div>
  </li>
);

export default PostIndexItem;
