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

	// Function to generate a random color
	const generateRandomColor = () => {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	// Generate a random color when the component mounts
	useEffect(() => {
		setBgColor(generateRandomColor());
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
				{/* Remove unnecessary divs to ensure text centering */}
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
