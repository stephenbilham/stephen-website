import React, { FC } from "react";
import Image from "next/image";

interface Certificate {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	footerLinks: { name: string; url: string }[];
}

interface CertificateCardProps {
	certificate: Certificate;
	theme: string;
}

const CertificateCard: FC<CertificateCardProps> = ({ certificate, theme }) => {
	const isDark = theme === "dark";

	return (
		<div
			className={`p-4 bg-white rounded-lg shadow-md ${
				isDark ? "dark:bg-gray-800" : ""
			}`}>
			<div className="flex flex-col items-center mb-4">
				<Image
					src={certificate.image}
					alt={certificate.imageAlt}
					width={400}
					height={400}
					className="mb-4"
				/>
				<h3
					className={`text-xl font-semibold montserrat ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					{certificate.title}
				</h3>
				<p
					className={`text-gray-600 leading-relaxed montserrat ${
						isDark ? "text-gray-400" : ""
					}`}>
					{certificate.description}
				</p>
			</div>
			<div className="flex space-x-2 mt-4">
				{certificate.footerLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`text-sm ${
							isDark ? "text-blue-400" : "text-blue-600"
						} hover:underline`}>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default CertificateCard;
