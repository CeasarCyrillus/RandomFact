import {RedditPost} from "./App";
import React from "react";
import './Post.css';

export const Post = (props: {post: RedditPost}) => {
  return <div className={"post-wrapper"}>
    <p className={"post-title"}>
      {props.post.title}
    </p>
    <div className={"post-link-wrapper"}>
      <a className={"post-link"} href={props.post.permaLink} target="_blank">
        see this post on reddit.com
      </a>
    </div>
  </div>
}