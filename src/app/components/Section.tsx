import React, { FC, ReactNode } from "react";

type SectionProps = {
	theme: string;
	children: ReactNode;
};

const Section: FC<SectionProps> = ({ theme, children }) => {
	const sectionClasses =
		theme === "dark" ? "bg-darkMode text-white" : "bg-white text-gray-900";

	const gapClasses = "mt-40"; // Margin-top for 40px gap on top between sections

	return (
		<section className={`${sectionClasses} ${gapClasses} px-18`}>
			<div className="mx-auto flex flex-col md:flex-row">{children}</div>
		</section>
	);
};

export default Section;
