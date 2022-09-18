import React from "react";
import Volume from "../img/Volume.js"

const Word = ({ data }) => {
    const word = data[0].word;
    const wordform = data[0].meanings[0].partOfSpeech;
	const audioSource = findAudioSource(data[0].phonetics)
	const wayToPronounce = findWayToPronounce(data[0].phonetics)
	
	function findAudioSource(phonetics) {
		for(const phonetic of phonetics) {
			if(phonetic.text != undefined && phonetic.audio != undefined) {
				return phonetic.audio
			}
		}
	}
	
	function findWayToPronounce(phonetics) {
		for(const phonetic of phonetics) {
			if(phonetic.text != undefined) {
				return phonetic.text;
			}
		}
	}
	
	const playAudio = () => {
		const player = document.getElementById("play");
		player.play();
	}
	
	return (
	<div>
        <h1 className="text-4xl mt-4">{word}</h1>
        <h1 className="text-base mt-2 italic font-semibold">{wordform}</h1>
        <button class="font-semibold inline-flex items-center gap-x-1 mt-2 mb-2"
			onClick={playAudio}>   
			<Volume />
			<span>{wayToPronounce}</span>
			<audio id="play" preload="none">
				<source src={audioSource} type="audio/mpeg"></source>
			</audio>
		</button>
	</div>    
	);
};

export default Word;
