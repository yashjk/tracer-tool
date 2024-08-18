import React, { useState } from "react";
import GraphTree from "./components/GraphTree";
import createGraph from "./utils/logParser";
import DetailsPanel from "./components/DetailsPanel";
const App = () => {
	const [uploadedFile, setUploadedFile] = useState(null);
	const [selected, setSelected] = useState(null);
	const [treeData, setTreeData] = useState(null);
	const [isParsedDisabled, setIsParsedDisabled] = useState(false);
	const handleUpload = (event) => {
		const file = event.target.files[0];
		if (file) setUploadedFile(file);
	};
	const handleFileParse = (event) => {
		if (uploadedFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const logs = JSON.parse(e.target.result);
				const parsedData = createGraph(logs);
				setTreeData(parsedData);
			};
			reader.readAsText(uploadedFile);
		}
		setIsParsedDisabled(true);
	};

	return (
		<div className="bg-black h-[500vh] flex justify-center">
			<div className="flex flex-col items-center">
				<h1 className="text-2xl text-blue-400 p-10">Ragas Evaluation Tracer</h1>
				<input
					onChange={handleUpload}
					type="file"
					accept=".json"
					className="mb-4 p-2 text-black bg-white rounded-sm"
				/>
				<button
					onClick={handleFileParse}
					disabled={isParsedDisabled}
					className={
						isParsedDisabled
							? "hidden"
							: "mb-4 p-2 text-white bg-blue-600 rounded-sm"
					}
				>
					Parse
				</button>
				{treeData && <GraphTree data={treeData} setSelected={setSelected} />}
			</div>
			{selected && (
				<DetailsPanel selected={selected} setSelected={setSelected} />
			)}
		</div>
	);
};

export default App;
