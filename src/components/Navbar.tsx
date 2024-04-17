"use client"; // Add this line to mark the file as a client component

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
			<h1 className="font-bold">My App</h1>

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
				} md:flex flex-col md:flex-row md:space-x-4 items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white dark:bg-customDark md:bg-transparent z-10`}>
				<li>
					<Link href="/">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Skills
						</span>
					</Link>
				</li>
				<li>
					<Link href="/Certificates">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Certificates
						</span>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Projects
						</span>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<span className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							Contact
						</span>
					</Link>
				</li>
				<li>
					<ThemeSwitch />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
