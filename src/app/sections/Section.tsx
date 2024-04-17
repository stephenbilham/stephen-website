import React, { FC, ReactNode } from "react";

type SectionProps = {
	theme: string; // Theme prop is required
	height?: string; //
	children: ReactNode;
};

const Section: FC<SectionProps> = ({
	theme,
	height = "h-screen",
	children,
}) => {
	// Determine the classes for the section based on the theme prop
	const sectionClasses =
		theme === "dark" ? "bg-customDark text-white" : "bg-white text-gray-900";

	// Combine the height prop and margin classes with other classes
	const sectionHeight = height;
	const marginClasses = "m-6";

	return (
		<section
			className={`${sectionClasses} ${sectionHeight} ${marginClasses} flex items-center justify-center px-4 md:px-8`}>
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row">
				{children}
			</div>
		</section>
	);
};

export default Section;
