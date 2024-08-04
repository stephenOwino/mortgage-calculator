import { Stack, Typography } from "@mui/material";
import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { blue } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
	const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

	const totalLoanMonths = loanTerm * 12; //60 months = 5years
	const interestPerMonth = interestRate / 100 / 12; ///500 @ 12% for 1year

	const monthlyPayment =
		(loanAmount *
			interestPerMonth *
			(1 + interestPerMonth) ** totalLoanMonths) /
		((1 + interestPerMonth) ** totalLoanMonths - 1);

	const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

	const piChartData = {
		labels: ["Principle", "Interest"],
		datasets: [
			{
				label: "Ratio of principle and interest",
				data: [homeValue, totalInterestGenerated],
				backgroundColor: ["rgba(75, 70, 229, 1)", " rgba(224, 224, 224, 0.5)"],
				borderColor: [
					"rgba(255, 26, 104, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(0, 0, 0, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<Stack gap={5}>
			<Typography textAlign='center' variant='h5'>
				Monthly Payment ${monthlyPayment.toFixed(2)}
			</Typography>
			<Stack direction='row' justifyContent='center'>
				<div>
					<Pie data={piChartData} />
				</div>
			</Stack>
		</Stack>
	);
};

export default Result;
