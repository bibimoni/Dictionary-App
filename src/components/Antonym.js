import React from "react";

const Antonym = ({ mean }) => {
	return (
		<div class="columns-2 md:columns-3">
			{mean.map((item) =>
				item.meanings.map((mean) =>
					mean.antonyms.map((ant) => {
						return (
							<li class="italic hover:underline text-1xl">
								{ant}
							</li>
						);
					})
				)
			)}
		</div>
	);
};

export default Antonym;