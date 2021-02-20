import {RedditPost} from "./App";
import React from "react";

export const Post = (props: {post: RedditPost}) => {
  return <section className={"post-wrapper"}>
    <p className={"post-name"}>{props.post.title}</p>
    {props.post.thumbNail === "default" ?
      <></>
      :
      <img className={"post-image"} src={props.post.thumbNail} alt={"thumbnail for funfact"}/>
    }
    <a className={"post-link"} href={props.post.permaLink}> see this post on reddit.com</a>
  </section>
}