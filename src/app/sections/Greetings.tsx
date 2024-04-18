import React, { FC } from "react";
import { Avatar } from "../../components/Avatar";
import avatar from "../../../public/me.jpg";
import Image from "next/image";
import githubIcon from "../../../public/svg/github.svg";
import linkedinIcon from "../../../public/svg/linkedin.svg";
import cvIcon from "../../../public/svg/cv.svg";
import Section from "../../components/Section";

const GreetingSection: FC<{ theme: string }> = ({ theme }) => {
	return (
		<Section theme={theme}>
			<div className=" mx-auto flex flex-col md:flex-row w-full">
				{/* Text Section */}
				<div className="md:w-1/2 w-full text-center md:text-left montserrat">
					<h1 className="text-3xl font-bold mb-4">Hi, I'm Stephen!</h1>
					<h3 className="text-lg leading-relaxed montserrat">
						I'm thrilled to share my journey and work as a passionate software
						developer. This site is a personal challenge for me to explore and
						learn new technologies like the modern React framework Next.js and
						utility-first CSS framework Tailwind CSS. I'm excited to showcase my
						skills, projects, and love for building innovative and efficient
						solutions. Enjoy exploring!
					</h3>
					{/* CV */}
					<div className="mt-4 flex justify-center md:justify-start">
						<a
							href="/Stephen_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 dark:bg-gray-700 rounded-lg">
							<Image src={cvIcon} alt="CV" width={62} height={62} />
						</a>
						{/* Contact Button */}
						{/* <a
							href="/contact"
							className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
							Contact
						</a> */}
					</div>
				</div>

				{/* Image Section */}
				<div className="md:w-1/2 w-full flex flex-col items-center">
					<Avatar
						src={avatar}
						height={280}
						width={280}
						alt="Avatar photo"
						className="border-4 border-green-500 rounded-full"
					/>
					{/* Links to GitHub and LinkedIn */}
					<div className="mt-4 flex space-x-4">
						{/* GitHub icon */}
						<a
							href="https://github.com/your-github-profile"
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={githubIcon}
								alt="GitHub"
								width={24}
								height={24}
								className="transition-transform duration-300 hover:scale-110"
							/>
						</a>

						{/* LinkedIn icon */}
						<a
							href="https://www.linkedin.com/in/your-linkedin-profile"
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={linkedinIcon}
								alt="LinkedIn"
								width={24}
								height={24}
								className="transition-transform duration-300 hover:scale-110"
							/>
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default GreetingSection;
