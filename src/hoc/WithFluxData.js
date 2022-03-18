import { ResultContext } from "context/ResultContext";
import { useContext } from "react";

const WithFluxData = (WrappedComponent) => {
	return (props) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const context = useContext(ResultContext);
		console.log(context.flux_a);
		const masterChart = context.comb;
		console.log("MasterChart", masterChart);
		return <WrappedComponent {...props} masterChart={masterChart} />;
	};
};

export default WithFluxData;
