import React from "react";

const ExampleList = ({ definition, id }) => {			
	//check if there are any examples
	const examples = () => {
		const example = definition.example;
		if(example) {
			//setHasExamples(true)
			return example;
		}
	}
	const example = examples();
	
	return (
		(example && (
			<div class="flex flex-row ">
				<span class="indent-8 mt-0.5 mb-1">‖</span>
				<p class="indent-2 mt-1 mb-1 italic">{example}</p>	
			</div>					
			))
	);
};

export default ExampleList;
