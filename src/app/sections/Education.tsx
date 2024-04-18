import React, { FC } from "react";
import Section from "../../components/Section";
import EducationCard from "../../components/EducationCard";
import { educationInfo } from "../../../src/portfolio";

const EducationSection: FC<{ theme: string }> = ({ theme }) => {
	return (
		<Section theme={theme}>
			{/* <div className="max-w-[1200px] mx-auto w-full"> */}
			<div>
				<h1 className="text-3xl font-bold mb-4 text-left">Education</h1>
				{/* Container for EducationCards */}
				<div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
					{educationInfo.schools.map((school, index) => (
						<EducationCard key={index} school={school} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default EducationSection;
