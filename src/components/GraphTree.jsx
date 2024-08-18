import React from "react";
import GraphBranch from "./GraphBranch";

const GraphTree = ({data, setSelected}) => {
	return (
		<ul className="mb-10">
			{data.map((branch) => (
				<GraphBranch key={branch.run_id} branch={branch} setSelected={setSelected}/>
			))}
		</ul>
	);
};


export default GraphTree;
