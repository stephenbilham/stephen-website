import React, { FC } from "react";
import Section from "../../components/Section";
import EducationCard from "../../components/EducationCard";
import { educationInfo } from "../../../src/portfolio";

const EducationSection: FC<{ theme: string }> = ({ theme }) => {
	return (
		<Section theme={theme}>
			<div id="education">
				<h1
					className={`text-3xl font-bold mb-4 text-left montserrat ${
						theme === "dark" ? "text-white" : "text-gray-900"
					}`}>
					Education
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
					{educationInfo.schools.map((school, index) => (
						<EducationCard key={index} school={school} theme={theme} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default EducationSection;
