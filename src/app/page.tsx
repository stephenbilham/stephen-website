"use client";

import Navbar from "../components/Navbar";
import { useTheme } from "next-themes";
import { FC } from "react";
import GreetingSection from "./sections/Greetings";
import SkillsSection from "./sections/Skills"; // Import other sections as needed

const Home: FC = () => {
	// Use the useTheme hook to access the current theme
	const { theme } = useTheme();

	// Determine the background color based on the current theme
	const backgroundColor =
		theme === "dark" ? "bg-darkMode text-white" : "bg-white text-black";

	return (
		<main className={`flex min-h-screen flex-col ${backgroundColor}`}>
			<Navbar />
			<GreetingSection theme={theme ?? "light"} />
			<SkillsSection theme={theme ?? "light"} />
			{/* Add other sections here and pass the theme prop as needed */}
		</main>
	);
};

export default Home;
