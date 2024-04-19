// SVG DATA
const svgData = [
	{
		name: "Node.js",
		path: "/svg/nodejs-original-wordmark.svg",
	},
	{
		name: "React.js",
		path: "/svg/react-original-wordmark.svg",
	},
	{
		name: "Next.js",
		path: "/svg/nextjs-line-wordmark.svg",
	},
	{
		name: "Javascript",
		path: "/svg/javascript-original.svg",
	},
	{
		name: "Typescript",
		path: "/svg/typescript-original.svg",
	},
	{
		name: "Express.js",
		path: "/svg/express-original-wordmark.svg",
	},
	{
		name: "Mongodb",
		path: "/svg/mongodb-original-wordmark.svg",
	},
	{
		name: "Mongoose",
		path: "/svg/mongoose-original-wordmark.svg",
	},
	{
		name: "Graphql",
		path: "/svg/graphql-plain-wordmark.svg",
	},
	{
		name: "Npm",
		path: "/svg/npm-original-wordmark.svg",
	},
	{
		name: "Postman",
		path: "/svg/postman-original-wordmark.svg",
	},
	{
		name: "React Router",
		path: "/svg/reactrouter-original-wordmark.svg",
	},
	{
		name: "Redux",
		path: "/svg/redux-original.svg",
	},
	{
		name: "SonarQube",
		path: "/svg/sonarqube-original-wordmark.svg",
	},
	{
		name: "Storybook",
		path: "/svg/storybook-original-wordmark.svg",
	},
	{
		name: "Jest",
		path: "/svg/jest-plain.svg",
	},
	{
		name: "Jenkins",
		path: "/svg/jenkins-line.svg",
	},
	{
		name: "Handlebars",
		path: "/svg/handlebars-line-wordmark.svg",
	},
	{
		name: "Mobx",
		path: "/svg/mobx-original.svg",
	},
	{
		name: "Jira",
		path: "/svg/jira-original-wordmark.svg",
	},
	{
		name: "Github",
		path: "/svg/github-original-wordmark.svg",
	},
	{
		name: "firebase	",
		path: "/svg/firebase-line-wordmark.svg",
	},
	{
		name: "git",
		path: "/svg/git-original-wordmark.svg",
	},
];

const skillsData = {
	title: "What I do",
	description: `I enjoy learning and pushing the boundaries of technology! Here are some of the tech stacks I've encountered and utilized throughout my 4+ years in the tech industry.`,
	listElements: [
		`◦ Develop highly interactive front-end / user interfaces.`,
		`◦ Build and maintain efficient, scalable APIs.`,
		`◦ Collaborate effectively with cross-functional teams.`,
	],
	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "fab fa-sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "fab fa-react",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "fab fa-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "fas fa-database",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "fab fa-aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "fab fa-python",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "fab fa-docker",
		},
	],
	display: true,
};

// EDUCATION
const educationInfo = {
	schools: [
		{
			name: "University of California, San Diego",
			logoPath: "/educationLogo/ucsd-logo.png",
			degree: "Bachelor of Arts, Communication and minor in Business",
			years: "September 2017 - April 2019",
			description: "",
			descriptionBullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			],
		},
		{
			name: "Learn Academy",
			logoPath: "/educationLogo/learn.png",
			degree: "Full Stack Web Developer Certification",
			years: "October - December 2019",
			description: "",
			descriptionBullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			],
		},
	],
};

// CERTIFICATES
const certificates = [
	{
		title: "Full Stack Developer Certification",
		description:
			"Build an eCommerce platform from the ground up with React, Redux Toolkit, Express & MongoDB",
		image: "/certificates/mern-stack-certificate.png",
		imageAlt: "Full Stack Developer Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/mern-ecommerce",
			},
		],
	},
	{
		title: "GraphQL With React Certification",
		description:
			"Received a certification after completing a course on GraphQL with React. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		image: "/certificates/graphql-certificate.png",
		imageAlt: "GraphQL With React Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/graphql-with-react-course",
			},
		],
	},
	{
		title: "Complete React Certification",
		description:
			"Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
		image: "/certificates/react-redux-certificate.png",
		imageAlt: "React (w/ Hooks and Redux) Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/react-2nd-edition",
			},
		],
	},
	{
		title: "Advanced Sass Certification",
		description:
			"The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more!",
		image: "/certificates/sass-certificate.png",
		imageAlt:
			"Advanced CSS and Sass: Flexbox, Grid, Animation Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/advanced-css-and-sass",
			},
		],
	},
];

// CAREER
const workExperiences = {
	display: true,
	experience: [
		{
			company: "CompanyA",
			role: "Software Engineer",
			date: "November 2020 – December 2023",
			desc: "Worked on several projects, including designing and implementing new features.",
			companyLogo: "/companyLogo/companya.png",
			descBullets: [
				"Contributed to the Software Development Life Cycle (SDLC)",
				"Implemented advanced features using React and Node.js",
				"Worked in an collaberative Agile work environment",
			],
		},
		{
			company: "Westgate Resorts",
			role: "Frontend Engineer and Design Intern",
			date: "June 2020 – August 2020",
			desc: "Employed automation tools for efficient deployment and management of email campaigns, ensuring timely client communication.",
			companyLogo: "/companyLogo/westgate.png",
			descBullets: ["Created Figma designs", "Employed automation tools"],
		},
		{
			company: "Zeal Tech Consultancy",
			role: "Software Engineer Intern",
			date: "January 2020 – February 2020",
			desc: "Developed GraphQL endpoints for selected data fields, customizing queries and mutations to import and modify specific information into the client browser.",
			companyLogo: "/companyLogo/zeal.png",
			descBullets: [
				"Collaborated with design team to create an intuitive UI",
				"Developed APIs for mobile and web applications",
			],
		},
	],
};

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"An e-commerce platform built with MERN Stack - initial load takes a while, but it works!",
		image: "/projects/proshop.png",
		imageAlt: "E-Commerce Platform",
		footerLinks: [
			{
				name: "View Website",
				url: "https://proshop-v2-m33h.onrender.com/",
				disabled: false,
			},
			{
				name: "Source Code",
				url: "https://github.com/stephenbilham/proshop-v2",
			},
		],
	},
	{
		title: "Natour",
		description: "A landing page built with HTML, CSS, and JavaScript.",
		image: "/projects/natour.png",
		imageAlt: "Natour Website",
		footerLinks: [
			{
				name: "View Website",
				url: "https://stephenbilham.github.io/sb-natour/",
				disabled: false,
			},
			{
				name: "Source Code",
				url: "https://github.com/stephenbilham/sb-natour",
			},
		],
	},
	{
		title: "Budget App",
		description: "A budgeting app built with React, Redux, and Firebase.",
		image: "/projects/budget.png",
		imageAlt: "Budget App",
		footerLinks: [
			{
				name: "View Website",
				url: "https://budget-app.mead.io/",
				disabled: false,
			},
			{
				name: "Source Code",
				url: "https://github.com/stephenbilham/Financial-budgeting-App",
			},
		],
	},
	{
		title: "Movie Screen",
		description:
			"A landing page for an interview project for a movie search website.",
		image: "/projects/movie.png",
		imageAlt: "Movie Screen",
		footerLinks: [
			{
				name: "View Website",
				url: "https://charter-coding-challenge-nu.vercel.app/",
				disabled: false,
			},
			{
				name: "Source Code",
				url: "https://github.com/stephenbilham/charter-coding-challenge",
			},
		],
	},
	{
		title: "Lyrical GraphQL",
		description: "Using GraphQL to create songs and lyrics.",
		image: "/projects/lyrical.png",
		imageAlt: "Lyrical GraphQL",
		footerLinks: [
			{
				name: "View Website",
				url: "https://lyrical-graphql.netlify.app/",
				disabled: true,
			},
			{
				name: "Source Code",
				url: "https://github.com/stephenbilham/lyrical-graphql",
			},
		],
	},
];

const contactInfo = {
	title: "Contact Me",
	subtitle:
		"I'd love to hear from you! Please feel free to reach out via email or phone.",
	email_address: "stephenbilham@yahoo.com",
	number: "+18058076459",
};

export {
	svgData,
	skillsData,
	educationInfo,
	certificates,
	workExperiences,
	projects,
	contactInfo,
};
