import React from "react";
import GraphBranch from "./GraphBranch";

const BranchChild = ({branch, setSelected}) => {
	return (
		<ul className="pl-10 marker:text-green-600">
			{branch.children.map((child) => (
				<div className="flex" key={child.run_id}>
					<div className="flex flex-col text-white">
						<span className="pr-1">|</span>
						<span className="pr-2">|--</span>
					</div>
					<GraphBranch
						key={child.run_id}
						branch={child}
						setSelected={setSelected}
					/>
				</div>
			))}
		</ul>
	);
};

export default BranchChild;
