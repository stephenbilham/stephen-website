import React, { FC } from "react";
import Image from "next/image";

interface EducationCardProps {
	school: {
		name: string;
		degree: string;
		logoPath: string;
		years: string;
		description?: string;
	};
}

const EducationCard: FC<EducationCardProps> = ({ school }) => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<div className="flex items-center mb-4">
				<Image
					src={school.logoPath}
					alt={`${school.name} logo`}
					width={120}
					height={120}
					className="mr-4"
				/>
				<div>
					<h2 className="text-xl font-semibold">{school.name}</h2>
					<p className="text-gray-600">{school.degree}</p>
					<p className="text-gray-500">{school.years}</p>
				</div>
			</div>
			{school.description && (
				<p className="text-gray-700">{school.description}</p>
			)}
		</div>
	);
};

export default EducationCard;
