import {RedditPost} from "./App";
import React from "react";
import './Post.css';
import {Button} from "./Button";

interface Props {
  post: RedditPost,
  postNavigationOnClick: (direction: number) => void;
  numberOfPosts: number;
  currentPostIndex: number;
}

export const Post = (props: Props) =>
  <div className={"post-wrapper"}>
    <p className={"post-title"}>
      {props.post.title}
    </p>

    <div className={"post-buttons-wrapper"}>
      {props.currentPostIndex > 0 ?
        <Button direction={"left"} onClick={() => {props.postNavigationOnClick(-1)}}/>
        : <></>
      }
      {props.currentPostIndex < (props.numberOfPosts - 1) ?
        <Button direction={"right"} onClick={() => {props.postNavigationOnClick(1)}}/>
        : <></>
      }
    </div>

    <div className={"post-link-wrapper"}>
      <a className={"post-link"} href={props.post.permaLink} target="_blank">
        see this post on /r/todayilearned
      </a>
    </div>
  </div>