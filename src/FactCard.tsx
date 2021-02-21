import React, {useEffect, useState} from "react";
import './Post.css';
import {Button} from "./Button";
import factsJson from "./facts.json";

const getFactIndexFromUrl = () => {
  if (window.location.hash.length <= 0) {
    return 0;
  }
  return Number(window.location.hash.slice(1))
};

export const FactCard = () => {
  const [factIndex, setFactIndex] = useState<number>(getFactIndexFromUrl());

  useEffect(() => {
    const onHashChange = () => {
      setFactIndex(getFactIndexFromUrl());
    }

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    }

  }, [])

  useEffect(() => {
    window.location.hash = `#${factIndex}`;
  }, [factIndex])

  const fact = factsJson.facts[factIndex];
  return <div className={"post-wrapper"}>
    <p className={"post-title"}>
      {fact.text}
    </p>

    <div className={"post-buttons-wrapper"}>
      {factIndex > 0 ?
        <Button direction={"left"} onClick={() => {
          setFactIndex(factIndex - 1);
        }}/>
        : <></>
      }
      {factIndex < (factsJson.numberOfFacts - 1) ?
        <Button direction={"right"} onClick={() => {
          setFactIndex(factIndex + 1);
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