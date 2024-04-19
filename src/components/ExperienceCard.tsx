import React, { FC, useEffect, useState } from "react";

interface Experience {
	company: string;
	role: string;
	date: string;
	desc: string;
	companyLogo: string;
	descBullets?: string[];
}

interface ExperienceCardProps {
	experience: Experience;
	theme: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience, theme }) => {
	const [bgColor, setBgColor] = useState("");

	// List of darker, most commonly used company colors
	const darkCompanyColors = [
		"#003366", // Dark blue
		"#004080", // Navy blue
		"#006400", // Dark green
		"#8B0000", // Dark red
		"#4B0082", // Indigo
		"#3B0B17", // Deep maroon
		"#2F4F4F", // Dark slate gray
		"#483D8B", // Dark slate blue
		"#556B2F", // Dark olive green
		"#800000", // Dark brown
	];

	// Function to generate a random index to select a color from the dark company colors list
	const generateDarkCompanyColor = () => {
		const randomIndex = Math.floor(Math.random() * darkCompanyColors.length);
		return darkCompanyColors[randomIndex];
	};

	// Generate a random dark company color when the component mounts
	useEffect(() => {
		setBgColor(generateDarkCompanyColor());
	}, []);
	return (
		<div
			className={`p-4 rounded-lg border ${
				theme === "dark"
					? "bg-gray-800 border-gray-700"
					: "bg-white border-gray-300"
			} shadow-lg hover:shadow-xl`}>
			{/* Header section with random background color */}
			<div
				className="h-44 rounded-t-lg flex items-center justify-center"
				style={{ backgroundColor: bgColor }} // Use the random background color
			>
				<h5 className="text-xl font-bold text-white montserrat">
					{experience.company}
				</h5>
			</div>
			{/* Company logo section */}
			<div className="flex justify-center">
				<img
					src={experience.companyLogo}
					alt={experience.company}
					className="w-24 h-24 rounded-full shadow-md -mt-12"
				/>
			</div>
			{/* Details section */}
			<div className="px-4 py-4 text-center">
				<h5 className="text-xl font-semibold text-gray-900 dark:text-white montserrat">
					{experience.role}
				</h5>
				<h5 className="text-sm text-gray-500 dark:text-gray-400 mb-2 leading-relaxed montserrat">
					{experience.date}
				</h5>
				<p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed montserrat">
					{experience.desc}
				</p>
				{experience.descBullets && (
					<ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 leading-relaxed montserrat">
						{experience.descBullets.map((bullet, index) => (
							<li key={index}>{bullet}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default ExperienceCard;
