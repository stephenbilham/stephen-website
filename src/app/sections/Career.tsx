import React, { FC } from "react";
import Section from "../../components/Section";
import ExperienceCard from "../../components/ExperienceCard";
import { workExperiences } from "../../../src/portfolio";

const CareerSection: FC<{ theme: string }> = ({ theme }) => {
	if (!workExperiences.display) return null;

	return (
		<Section theme={theme}>
			<div>
				<h1
					className="text-3xl font-bold mb-4 text-left montserrat"
					id="career">
					Career
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{workExperiences.experience.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} theme={theme} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default CareerSection;
