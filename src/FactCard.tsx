import React, {useEffect, useState} from "react";
import './Post.css';
import factsJson from "./facts.json";
import {NavigationButtons} from "./NavigationButtons";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const FactCard = () => {
  const [factIndex, setFactIndex] = useState<number>(getFactIndexFromUrl() ?? random(0, factsJson.numberOfFacts - 1));

  useEffect(() => {
    const onHashChange = () => {
      setFactIndex(getFactIndexFromUrl() ?? random(0, factsJson.numberOfFacts - 1));
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
    <NavigationButtons factIndex={factIndex} previousOnClick={() => {
      setFactIndex(factIndex - 1);
    }} randomOnClick={() => {
      setFactIndex(random(0, factsJson.numberOfFacts - 1));
    }} nextOnClick={() => {
      setFactIndex(factIndex + 1);
    }}/>
    <p className={"post-title"}>
      {fact.text}
    </p>


    <div className={"post-link-wrapper"}>
      <a className={"post-link"} href={fact.source} target="_blank">
        see source at www.thefactsite.com
      </a>
    </div>
  </div>;
}

const getFactIndexFromUrl = () => {
  if (window.location.hash.length <= 0) {
    return null;
  }
  return Number(window.location.hash.slice(1)) - 1;
};