import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
	defaultValue,
	min,
	max,
	step,
	onChange,
	value,
	label,
	unit,
	amount,
}) => {
	return (
		<Stack my={1.5}>
			<Stack gap={1}>
				<Typography variant='subtitle2'>{label}</Typography>
				<Typography variant='h5'>
					{unit} {amount}
				</Typography>
			</Stack>
			<Slider
				defaultValue={defaultValue}
				min={min}
				max={max}
				aria-label='Default'
				valueLabelDisplay='auto'
				marks
				step={step}
				onChange={onChange}
				evalue={value}
			/>
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='caption' color='text.secondary'>
					{min}
				</Typography>
				<Typography variant='caption' color='text.secondary'>
					{max}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default SliderComponent;
