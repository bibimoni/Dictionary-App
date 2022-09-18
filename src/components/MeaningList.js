import React, { useState } from "react";
import ExampleList from "./ExampleList.js";
import Line from "./Line";

const MeaningList = ({ mean }) => {
	//show the first meaning, and the option to show more
	const firstMeaning = mean[0].meanings[0].definitions[0].definition;
	const firstMeaningEx = mean[0].meanings[0].definitions[0]; // get the first definition
	const firstPartOfSpeed = mean[0].meanings[0].partOfSpeech;

	//show example for each definition
	const [showMore, setShowMore] = useState(false);

	return (
		<div>
			<div className="flex flex-col">
				{
					<div>
						<div className="relatives">
							<li className="text-1.5xl mt-0.5 self-start font-bold leading-loose hover:underline marker:text-sky-700">
								{firstMeaning}
							</li>

							<ExampleList definition={firstMeaningEx} id={0} />
							<div className="indent-2 flex-initial text-semibold text-end right-0 top-0 hover:underline italic">
								[{firstPartOfSpeed}]
							</div>
						</div>
						<Line />
					</div>
				}
				{!showMore && (
					<button
						class="max-w-xs text-zinc-500 font-semibold py-1 px-2 hover:underline mt-1 text-xs self-end"
						onClick={() => setShowMore(true)}
					>
						I want to know more
					</button>
				)}
			</div>
			{showMore && (
				<div class="flex flex-col">
					{mean.map((item) =>
						item.meanings.map((mean) =>
							mean.definitions.slice(1).map((def, index) => (
								<div>
									<div className="relative">
										<li className="text-left text-1.5xl mt-0.5 self-start font-bold hover:underline marker:text-sky-700">
											{def.definition}
										</li>
									</div>
									<ExampleList
										definition={def}
										id={index + 1}
									/>
									<div className="indent-2 flex-initial text-semibold text-end right-0 top-0 hover:underline italic">
										[{mean.partOfSpeech}]
									</div>
									<Line />
								</div>
							))
						)
					)}
					<button
						class="self-end max-w-xs text-zinc-500 font-semibold py-1 px-2 hover:underline mt-1 text-xs"
						onClick={() => setShowMore(false)}
					>
						Show less
					</button>
				</div>
			)}
		</div>
	);
};

export default MeaningList;
