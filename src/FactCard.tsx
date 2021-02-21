import React, {useState} from "react";
import './Post.css';
import {Button} from "./Button";
import factsJson from "./facts.json";

export const FactCard = () => {
  const [factId, setPostIndex] = useState<number>(0);
  const fact = (factsJson.facts)[factId];
  return <div className={"post-wrapper"}>
    <p className={"post-title"}>
      {fact.text}
    </p>

    <div className={"post-buttons-wrapper"}>
      {factId > 0 ?
        <Button direction={"left"} onClick={() => {
          setPostIndex(factId - 1);
        }}/>
        : <></>
      }
      {factId < (factsJson.numberOfFacts - 1) ?
        <Button direction={"right"} onClick={() => {
          setPostIndex(factId + 1);
        }}/>
        : <></>
      }
    </div>

    <div className={"post-link-wrapper"}>
      <a className={"post-link"} href={fact.source} target="_blank">
        see source www.thefactsite.com
      </a>
    </div>
  </div>;
}