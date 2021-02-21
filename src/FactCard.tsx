import React, {useEffect, useState} from "react";
import './Post.css';
import {ArrowButton} from "./ArrowButton";
import factsJson from "./facts.json";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const FactCard = () => {
  const getFactIndexFromUrl = () => {
    if (window.location.hash.length <= 0) {
      return 0;
    }
    return Number(window.location.hash.slice(1)) - 1;
  };

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
    window.location.hash = `#${factIndex + 1}`;
  }, [factIndex])

  const fact = factsJson.facts[factIndex];
  return <div className={"post-wrapper"}>
    <div className={"post-link-wrapper"}>
      <p>{factIndex + 1} / {factsJson.numberOfFacts}</p>
    </div>
    <p className={"post-title"}>
      {fact.text}
    </p>

    <div className={"post-buttons-wrapper"}>
      {factIndex > 0 ?
        <ArrowButton direction={"left"} onClick={() => {
          setFactIndex(factIndex - 1);
        }}/>
        : <></>
      }

      <span className={"post-button"} onClick={() => {
        setFactIndex(random(0, factsJson.numberOfFacts-1));
      }}>
        <i className="fas fa-redo" />
      </span>

      {factIndex < (factsJson.numberOfFacts - 1) ?
        <ArrowButton direction={"right"} onClick={() => {
          setFactIndex(factIndex + 1);
        }}/>
        : <></>
      }
    </div>

    <div className={"post-link-wrapper"}>
      <a className={"post-link"} href={fact.source} target="_blank">
        see source at www.thefactsite.com
      </a>
    </div>
  </div>;
}