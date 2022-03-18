import {
	LineChart,
	ResponsiveContainer,
	Legend,
	// Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";
import React from "react";

const Chart = ({ data }) => {
	console.log("In charts", data);
	return (
		<div>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart
					data={data}
					margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: "Time" }}
						dataKey="time"
						tick={false}
						domain={["dataMin", "dataMax"]}
						type="number"
						scale="time"
					/>
					<YAxis
						label={{ value: "Flux" }}
						tick={false}
						dataKey="rate"
						domain={["0", "dataMax"]}
					/>
					{/* <Tooltip /> */}
					<Legend />
					<Line
						type="monotone"
						dataKey="flux_a"
						stroke="#6bd098"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="flux_b"
						stroke="#f17e5d"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="flux_c"
						stroke="#fcc468"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="flux_x"
						stroke="#d296da"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="flux_m"
						stroke="#81d292"
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
