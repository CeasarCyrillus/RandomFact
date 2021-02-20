import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Post} from "./Post";

export interface RedditPost {
  permaLink: string;
  thumbNail: string;
  title: string;
}

const preProcessPermaLink = (path: string): string => {
  if(path.startsWith("https://reddit.com/"))
    return path;
  return `https://reddit.com/${path}`;
};

const preProcessPosts = (rawPosts: any[]): RedditPost[] => {
  return rawPosts.map(rawPost => {
    const data = rawPost["data"];

    const title = data["title"];
    const permaLink = preProcessPermaLink(data["permalink"]);
    const thumbNail = data["thumbnail"];

    return {permaLink, thumbNail, title}
  })
};

const selectRandomPost = (posts: RedditPost[]) => {
  const maxIndex = posts.length - 1;
  const randomIndex = Math.floor(Math.random() * maxIndex)
  return posts[randomIndex];
};

const App = () => {
  const [posts, setPosts] = useState<RedditPost[]>([]);

  const fetchTopPosts = useCallback(async () => {
    const url = "https://www.reddit.com/r/todayilearned/new.json";
    const response = await fetch(url);
    const json = await response.json();
    return json["data"]["children"];
  }, []);

  useEffect(() => {
   fetchTopPosts()
     .then((rawPosts) => {
       const posts = preProcessPosts(rawPosts);
       setPosts(posts)
     });
  }, [fetchTopPosts]);
  const postToShow = selectRandomPost(posts);
  return (
    <div>
      <h1>Fun Fact</h1>
      {posts.length !== 0 ? <Post post={postToShow} /> : <></>}
    </div>
  );
};

export default App;
