import React from "react";

const Word = ({ data }) => {
    console.log(data[0].word);
    const word = data[0].word;
    const wordform = data[0].meanings[0].partOfSpeech;
	const audioSource = data[0].phonetics[0].audio;
	const wayToPronounce = data[0].phonetics[0].text;
	
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
			<svg style={{color: "#000000"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16"> <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" fill="#000000"></path> <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" fill="#000000"></path> <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" fill="#000000"></path> </svg>    
			<span>{wayToPronounce}</span>
			<audio id="play" preload="none">
				<source src={audioSource} type="audio/mpeg"></source>
			</audio>
		</button>
	</div>    
	);
};

export default Word;