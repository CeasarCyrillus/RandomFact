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
  const goToPreviousFact = () => {
    setFactIndex(factIndex - 1);
  };

  const goToRandomFact = () => {
    setFactIndex(random(0, factsJson.numberOfFacts - 1));
  };

  const goToNextFact = () => {
    setFactIndex(factIndex + 1);
  };
  return <div className={"post-wrapper"}>
    <div className={"post-link-wrapper"}>
      <h1>Fact #{factIndex + 1}</h1>
    </div>
    <NavigationButtons
      factIndex={factIndex}
      previousOnClick={goToPreviousFact}
      randomOnClick={goToRandomFact}
      nextOnClick={goToNextFact}/>
    <p className={"post-title"}>
      {fact.text}
    </p>

      <a className={"post-link"} href={fact.source} target="_blank">
        see source at www.thefactsite.com
      </a>
  </div>;
}

const getFactIndexFromUrl = () => {
  if (window.location.hash.length <= 0) {
    return null;
  }
  return Number(window.location.hash.slice(1)) - 1;
};