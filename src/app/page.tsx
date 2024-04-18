"use client";

import Navbar from "../components/Navbar";
import { useTheme } from "next-themes";
import { FC } from "react";
import GreetingSection from "./sections/Greetings";
import SkillsSection from "./sections/Skills"; // Import other sections as needed
import EducationSection from "./sections/Education";
import CertificatesSection from "./sections/Certificates";
import CareerSection from "./sections/Career";
import ProjectSection from "./sections/Projects";
import ContactSection from "./sections/Contact";

const Home: FC = () => {
	// Use the useTheme hook to access the current theme
	const { theme } = useTheme();

	// Determine the background color based on the current theme
	const backgroundColor =
		theme === "dark" ? "bg-darkMode text-white" : "bg-white text-black";

	return (
		<main
			className={`flex flex-col ${backgroundColor}`}
			style={{ minHeight: "100vh" }}>
			<Navbar />
			<GreetingSection theme={theme ?? "light"} />
			<SkillsSection theme={theme ?? "light"} />
			<CareerSection theme={theme ?? "light"} />
			<EducationSection theme={theme ?? "light"} />
			<CertificatesSection theme={theme ?? "light"} />
			<ProjectSection theme={theme ?? "light"} />
			<ContactSection theme={theme ?? "light"} />
		</main>
	);
};

export default Home;
