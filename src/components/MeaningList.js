import { defaults } from "autoprefixer";
import React, { useState } from "react";

const MeaningList = ({ mean }) => {
	//show the first meaning, and the option to show more
	const firstMeaning = mean[0].meanings[0].definitions[0].definition;

	const [showMore, setShowMore] = useState(false);

	return (
		<div>
			<div className="flex flex-col items-end">
				{
					<li className="text-1.5xl mt-0.5 self-start font-bold leading-loose">
						{firstMeaning}
					</li>
				}
				{!showMore && (
					<button
						class="max-w-xs text-zinc-500 font-semibold py-1 px-2 hover:underline mt-1 mb-1 text-xs"
						onClick={() => setShowMore(true)}
					>
						I want to know more
					</button>
				)}
			</div>
			{showMore && (
				<div className="flex flex-col items-end">
					<div>
						{mean.map((item) =>
							item.meanings.map((mean) =>
								mean.definitions.slice(1).map((def) => (
									<div>
										<li className="text-1.5xl mt-0.5 self-start font-bold leading-loose">
											{def.definition}
										</li>
									</div>
								))
							)
						)}
					</div>
					<button
						class="max-w-xs text-zinc-500 font-semibold py-1 px-2 hover:underline mt-1 mb-1 text-xs"
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
