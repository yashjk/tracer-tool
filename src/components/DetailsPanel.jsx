import React from "react";

const DetailsPanel = ({ selected, setSelected }) => {
	const handleClick = () => {
		setSelected(null);
	};
	return (
		<>
			<button
				onClick={handleClick}
				className="relative left-4 p-2 bg-red-700 text-white h-10 rounded"
			>
				X
			</button>
			<div className="flex flex-col bg-gray-800 p-5 text-green-600 w-[30vw] overflow-auto shadow-md">
				<h2 className="text-xl font-bold mb-4">Details:</h2>
				<pre className="whitespace-pre-wrap break-words">
					{JSON.stringify(selected, null, 2)}
				</pre>
			</div>
		</>
	);
};

export default DetailsPanel;
