import React, { FC, ReactNode } from "react";

type SectionProps = {
	theme: string; // Theme prop is required
	children: ReactNode;
};

const Section: FC<SectionProps> = ({ theme, children }) => {
	// Determine the classes for the section based on the theme prop
	const sectionClasses =
		theme === "dark" ? "bg-customDark text-white" : "bg-white text-gray-900";

	// Add margin-top for 40px gap on top between sections
	const gapClasses = "mt-20"; // Tailwind class for 40px margin-top

	return (
		<section className={`${sectionClasses} ${gapClasses} px-4 md:px-8`}>
			<div className="mx-auto flex flex-col md:flex-row">{children}</div>
		</section>
	);
};

export default Section;
