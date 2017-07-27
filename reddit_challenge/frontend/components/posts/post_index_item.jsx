import React from 'react';

const PostIndexItem = ({ post }) => (
  <li className="post-index-item">
    <div className="post-title">
      <a href={`http://www.reddit.com${post.data.permalink}`}>
        {post.data.title}
      </a>
    </div>
    <div className="post-score">
      {post.data.score} Points
    </div>
  </li>
);

export default PostIndexItem;
