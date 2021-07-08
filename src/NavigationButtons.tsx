import {ArrowButton} from "./ArrowButton";
import factsJson from "./facts.json";
import React from "react";

interface NavigationButtonsProps {
	factIndex: number;
	previousOnClick: () => void;
	randomOnClick: () => void;
	nextOnClick: () => void;
}

export const NavigationButtons = (props: NavigationButtonsProps) =>
	<section className={"post-buttons-wrapper"}>
		{props.factIndex > 0 ?
			<ArrowButton direction={"left"} onClick={props.previousOnClick}/>
			: <></>
		}

		<span className={"post-button"} onClick={props.randomOnClick}>
        <i className="fas fa-random"/>
      </span>

		{props.factIndex < (factsJson.numberOfFacts - 1) ?
			<ArrowButton direction={"right"} onClick={props.nextOnClick}/>
			: <></>
		}
	</section>;