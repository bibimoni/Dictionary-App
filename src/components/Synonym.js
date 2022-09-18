import React from "react";

const Synonym = ({ mean }) => {
	return (
		<div class="columns-2 md:columns-3 mb-5">
			{mean.map((item) =>
				item.meanings.map((mean) =>
					mean.synonyms.map((syn) => {
						return (
							<li class="italic hover:underline text-1xl">
								{syn}
							</li>
						);
					})
				)
			)}
		</div>
	);
};

export default Synonym;
