import Link from "next/link";
import { FC, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar: FC = () => {
	// State to track whether the mobile menu is open
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="h-16 border-gray-200 flex justify-between items-center px-4">
			<h1 className="font-bold">Portfolio</h1>

			{/* Menu toggle button for smaller screens */}
			<button
				className="block md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
				onClick={toggleMenu}>
				{/* You can use a menu icon here */}☰
			</button>

			{/* Navigation list */}
			<ul
				className={`${
					isMenuOpen ? "block" : "hidden"
				} md:flex flex-col md:flex-row md:space-x-4 items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white dark:bg-customDark md:bg-transparent z-10 montserrat text-lg`}>
				<li>
					<Link href="#skills">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Skills
						</span>
					</Link>
				</li>
				<li>
					<Link href="#career">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Career
						</span>
					</Link>
				</li>
				<li>
					<Link href="#certifications">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Education
						</span>
					</Link>
				</li>
				<li>
					<Link href="#certifications">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Certifications
						</span>
					</Link>
				</li>
				<li>
					<Link href="#projects">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Projects
						</span>
					</Link>
				</li>
				<li>
					<Link href="#contact">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
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
