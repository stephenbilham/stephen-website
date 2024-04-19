import React, { FC } from "react";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../portfolio";

const ProjectsSection: FC<{ theme: string }> = ({ theme }) => {
	if (projects.length === 0) return null;

	return (
		<Section theme={theme}>
			<div>
				<h1
					className="text-3xl font-bold mb-4 text-left montserrat"
					id="projects">
					Other Projects
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} theme={theme} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default ProjectsSection;
