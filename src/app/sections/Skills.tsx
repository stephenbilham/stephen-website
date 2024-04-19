import React, { FC } from "react";
import Section from "../../components/Section";
import { svgData, skillsData } from "../../portfolio";
import Image from "next/image";
import workImg from "../../../public/work.png";
import svgList from "../../../public/svg-list.png";

const SkillsSection: FC<{ theme: string }> = ({ theme }) => {
	const { title, description, listElements } = skillsData;

	return (
		<Section theme={theme}>
			<div className="mx-auto flex flex-col md:flex-row w-full">
				{/* Left side section */}
				<div className="flex-1 hidden md:block">
					<Image
						src={workImg}
						alt="Work setting image"
						width={800}
						height={800}
					/>
				</div>

				{/* Right side section */}
				<div className="flex-1 montserrat mt-4 md:mt-0 md:ml-4">
					<h1 className="text-3xl font-bold mb-4">{title}</h1>
					<h3 className="text-lg leading-relaxed">{description}</h3>

					{/* Render SVGs dynamically from svgData */}
					{/* <div className="mt-12 mb-12 grid grid-cols-6 gap-1">
                        {svgData.map((svg, i) => (
                            <div key={i} className="flex justify-center items-center px-2">
                                <Image src={svg.path} alt={svg.name} width={50} height={50} />
                            </div>
                        ))}
                    </div> */}
					<div className="mt-12 mb-12">
						<Image
							src={svgList}
							alt="SVG list"
							width={800}
							height={800}
							className="w-full"
						/>
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
