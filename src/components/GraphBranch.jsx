import React, { useState } from "react";
import BranchChild from "./BranchChild";

const GraphBranch = ({ branch, setSelected }) => {
	const [isOpen, setIsOpen] = useState(false);
	const expansionToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleLastBranchChildClick = () => {
		branch.children.length === 0 ? setSelected(branch) : setSelected(null);
	};
	return (
		<li className="mt-6">
			<div
				onClick={() => {
					expansionToggle();
					handleLastBranchChildClick();
				}}
				className="text-xl text-green-600 cursor-pointer hover:text-white"
			>
				{branch.self.name} ({branch.type}) - Faithfulness:{" "}
				{branch.outputs?.faithfulness || branch.outputs?.output || "N/A"}
			</div>
			{isOpen && branch.children && branch.children.length > 0 && (
				<BranchChild branch={branch} setSelected={setSelected} />
			)}
		</li>
	);
};

export default GraphBranch;
