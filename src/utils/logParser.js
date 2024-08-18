const createGraph = (logs) => {
	const logMap = {};
	const tree = [];

	Object.entries(logs).map(([run_id, log]) => {
		logMap[run_id] = { ...log, run_id, children: [] };
    return null;
	});
	Object.values(logMap).map((log) => {
		if (log.parent_run_id === "None") {
			tree.push(log);
		} else {
			logMap[log.parent_run_id].children.push(log);
		}
    return null;
	});

	return tree;
};

export default createGraph;
