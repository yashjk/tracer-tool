import React, { useState } from "react";
import GraphTree from "./components/GraphTree";
import createGraph from "./utils/logParser";
import evaluationLogs from "./data/evaluation_logs.json";
import DetailsPanel from "./components/DetailsPanel";
const App = () => {
  const [selected, setSelected] = useState(null);
	const treeData = createGraph(evaluationLogs);

	return (
		<div className="bg-black h-[500vh] flex justify-center">
			<div className="flex flex-col items-center">
				<h1 className="text-2xl text-blue-400 p-10">Ragas Evaluation Tracer</h1>
				<GraphTree data={treeData} setSelected={setSelected} />
			</div>
			{selected && (
				<DetailsPanel selected={selected} setSelected={setSelected} />
			)}
		</div>
	);
};

export default App;
