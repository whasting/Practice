export const fetchPosts = username => (
  $.ajax({
    method: 'GET',
    url: `https://www.reddit.com/user/${username}/submitted.json`
  })
);
