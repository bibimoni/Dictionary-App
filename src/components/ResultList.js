import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InputContext } from "../App.js"
import MeaningList from "./MeaningList.js"
import Word from "./Word.js";
import Synonym from "./Synonym.js";
import Line from './Line';
import Antonym from './Antonym.js'

axios.defaults.baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

const ResultList = () => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const {inputValue} = useContext(InputContext);
	
	const fetchData = async (param) => {
		try {
			setLoading(true);
			const res = await axios(`/${param}`)
			setResponse(res.data);
			setError(null);
		} catch (err) {
			setError(err);
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	
	useEffect(() => {
		// if the input value exists
		if(inputValue) {
			fetchData(inputValue);
		}
	}, [inputValue])
	
	if(loading) {
		return (
			<div class="animate-pulse p-4 container mx-auto max-w-2xl flex-col flex space-y-3">	
				<div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
				<div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
				<div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
				<div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
			</div>	
		);
		
	}
	
	if(error) {
		return <h1 className="text-center mt-10 font-semibold text-zinc-600">
			❓ There is no words with the name "<span className="text-red-700 font-bold">{inputValue}</span>"
			</h1>
	}
	
	return (
		<div className="container mx-auto p-4 max-w-2xl">			
			{response && (
			<div>
					<Word data={response}/>
				<Line />
				<h3 className="text-2xl text-gray-600 italic font-semibold mt-1">
					Meaning & Definitions:
				</h3>
					<MeaningList mean={response}/>
				<h3 className="text-2xl text-gray-600 italic font-semibold mb-4">Synonym:</h3>
					<Synonym mean={response}/>
				<Line />
				<h3 className="text-2xl text-gray-600 italic font-semibold mt-4">Antonym:</h3>
					<Antonym mean={response}/>
			</div>
			)}
		</div>
	);
};

export default ResultList;
