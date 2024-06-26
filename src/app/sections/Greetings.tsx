import React, { FC } from "react";
import { Avatar } from "../../app/components/Avatar";
import avatar from "../../../public/me.jpg";
import Image from "next/image";
import githubIcon from "../../../public/svg/github.svg";
import linkedinIcon from "../../../public/svg/linkedin.svg";
import Section from "../../app/components/Section";
import cvImage from "../../../public/cv-photo.png";

const GreetingSection: FC<{ theme: string }> = ({ theme }) => {
	return (
		<Section theme={theme}>
			<div className="mx-auto flex flex-col md:flex-row w-full">
				{/* Text Section */}
				<div className="md:w-1/2 w-full text-center md:text-left montserrat">
					<h1 className="text-3xl font-bold mb-4">Hi, I'm Stephen!</h1>
					<h3 className="text-lg leading-relaxed montserrat">
						Welcome! This website was built using Next.js and Tailwind, both new
						technologies for me that I've come to enjoy. It demonstrates my
						ability to learn and apply new tools independently without relying
						on guides or cloning repositories. Through this project, I aim to
						showcase my skills and creativity, as well as highlight my past
						projects, education, and career experiences. I'm excited to share
						this self-made project with you.
					</h3>
					{/* CV */}
					<div className="mt-4 flex justify-center md:justify-start">
						<a
							href="/cv/Stephen_Bilham_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 dark:bg-gray-700 rounded-lg">
							<Image
								src={cvImage}
								alt="CV"
								width={62}
								height={62}
								className="transition-transform duration-300 hover:scale-110"
							/>
						</a>
					</div>
				</div>

				{/* Image Section */}
				<div className="md:w-1/2 w-full flex flex-col items-center pt-10">
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
							href="https://github.com/stephenbilham"
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={githubIcon}
								alt="GitHub"
								width={28}
								height={28}
								className="transition-transform duration-300 hover:scale-110"
							/>
						</a>

						{/* LinkedIn icon */}
						<a
							href="https://www.linkedin.com/in/srbilham/"
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={linkedinIcon}
								alt="LinkedIn"
								width={28}
								height={28}
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
