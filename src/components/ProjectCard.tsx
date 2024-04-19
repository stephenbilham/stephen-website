import React, { FC } from "react";
import Image from "next/image";
interface Project {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	footerLinks: {
		name: string;
		url: string;
		disabled?: boolean;
	}[];
}

interface ProjectCardProps {
	project: Project;
	theme: string;
}

// ProjectCard component
const ProjectCard: FC<ProjectCardProps> = ({ project, theme }) => {
	const isDark = theme === "dark";

	return (
		<div
			className={`p-4 rounded-lg shadow-lg hover:shadow-xl ${
				isDark ? "dark:bg-gray-800" : "bg-white"
			}`}>
			<div className="flex flex-col items-center mb-4">
				<Image
					src={project.image}
					alt={project.imageAlt}
					width={400}
					height={400}
					className="mb-4 shadow-md object-cover"
				/>
				<h3
					className={`text-xl font-semibold montserrat ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					{project.title}
				</h3>
				<p
					className={`text-gray-600 leading-relaxed montserrat ${
						isDark ? "text-gray-400" : ""
					}`}>
					{project.description}
				</p>
			</div>
			<div className="flex space-x-2 mt-4">
				{project.footerLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`px-4 py-2 text-sm font-medium rounded montserrat ${
							link.disabled
								? "cursor-not-allowed opacity-50"
								: "hover:bg-blue-700"
						} ${link.disabled ? "bg-gray-400" : "bg-blue-600"} text-white`}
						style={{ pointerEvents: link.disabled ? "none" : "auto" }}>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
