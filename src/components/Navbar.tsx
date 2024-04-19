import Link from "next/link";
import { FC, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

interface NavbarProps {
	theme: string; // Add theme prop to the interface
}

const Navbar: FC<NavbarProps> = ({ theme }) => {
	// State to track whether the mobile menu is open
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Determine whether the theme is dark or light
	const isDark = theme === "dark";

	return (
		<nav
			className={`h-16 border-gray-200 flex justify-between items-center px-4 sticky top-0 z-50 ${
				isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
			} shadow-lg`}>
			<h1 className="font-bold">Portfolio</h1>

			{/* Menu toggle button for smaller screens */}
			<button
				className="block md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
				onClick={toggleMenu}>
				☰
			</button>

			{/* Navigation list */}
			<ul
				className={`${
					isMenuOpen ? "block" : "hidden"
				} md:flex flex-col md:flex-row md:space-x-4 items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white dark:bg-customDark md:bg-transparent z-10 montserrat text-lg`}>
				<li>
					<Link href="#skills">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Skills
						</span>
					</Link>
				</li>
				<li>
					<Link href="#career">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Career
						</span>
					</Link>
				</li>
				<li>
					<Link href="#education">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Education
						</span>
					</Link>
				</li>
				<li>
					<Link href="#certifications">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Certifications
						</span>
					</Link>
				</li>
				<li>
					<Link href="#projects">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Projects
						</span>
					</Link>
				</li>
				<li>
					<Link href="#contact">
						<span
							className={`p-2 rounded hover:bg-gray-100 ${
								isDark ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"
							}`}>
							Contact
						</span>
					</Link>
				</li>
				<ThemeSwitch />
			</ul>
		</nav>
	);
};

export default Navbar;
