import React from "react";
import { contactInfo } from "../../portfolio";

const Contact: React.FC<{ theme: string }> = ({ theme }) => {
	// Determine whether the theme is dark or light
	const isDark = theme === "dark";

	return (
		<section
			className={`container mx-auto py-8 mt-30 ${
				isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
			}`}
			id="contact">
			<h1 className="text-3xl font-bold mb-4 text-center">
				{contactInfo.title}
			</h1>
			<p className="mb-6 text-center">{contactInfo.subtitle}</p>

			<div className="md:w-1/2 mx-auto">
				{contactInfo.number && (
					<div className="mb-4 text-center">
						<a
							className={`block mb-2 ${
								isDark ? "text-blue-400" : "text-blue-600"
							} hover:underline`}
							href={`tel:${contactInfo.number}`}>
							{contactInfo.number}
						</a>
					</div>
				)}
				<div className="text-center">
					<a
						className={`block mb-4 ${
							isDark ? "text-blue-400" : "text-blue-600"
						} hover:underline`}
						href={`mailto:${contactInfo.email_address}`}>
						{contactInfo.email_address}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
