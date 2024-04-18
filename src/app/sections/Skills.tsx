import React, { FC } from "react";
import Section from "../../components/Section";
import { svgData, skillsData } from "../../portfolio";
import Image from "next/image";

const SkillsSection: FC<{ theme: string }> = ({ theme }) => {
	const { title, description, listElements } = skillsData;
	return (
		<Section theme={theme}>
			<div className="mx-auto flex w-full">
				{/* Empty div for the left side */}
				<div className="flex-1"></div>

				<div className="flex-1 montserrat">
					<h1 className="text-3xl font-bold mb-4 ">{title}</h1>
					<h3 className="text-lg leading-relaxed">{description}</h3>

					{/* Render SVGs dynamically from svgData */}
					<div className="mt-4 grid grid-cols-6 gap-4 mb-10">
						{svgData.map((svg, i) => (
							<div key={i} className="flex justify-center items-center px-2">
								<Image src={svg.path} alt={svg.name} width={72} height={72} />
							</div>
						))}
					</div>

					<div>
						{/* <h3 className="text-2xl font-bold mb-4 montserrat">What I offer</h3> */}
						{listElements.map((element, i) => (
							<ul key={i} className="text-lg leading-relaxed montserrat">
								<li>{element}</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SkillsSection;
