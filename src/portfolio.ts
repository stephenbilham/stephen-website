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
	description: `I enjoy learning and pushing the boundaries of technology!`,
	listElements: [
		`⚡ Develop highly interactive front-end / user interfaces for your web and mobile applications.`,
		`⚡ Progressive web applications (PWAs) in normal and SPA stacks.`,
		`⚡ Integration of third-party services such as Firebase, AWS, and Digital Ocean.`,
	],
};

// EDUCATION
const educationInfo = {
	schools: [
		{
			name: "University of California, San Diego",
			logoPath: "/svg/ucsd-logo.png",
			degree: "Master of Science in Computer Science",
			years: "September 2017 - April 2019",
			description:
				"Participated in the research of XXX and published 3 papers.",
			descriptionBullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			],
		},
		{
			name: "Learn Academy",
			logoPath: "/svg/ucsd-logo.png",
			degree: "Full Stack Web Developer Certification",
			years: "October - December 2019",
			description:
				"Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, etc.",
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
		image: "/certifcates/mern-stack-certificate.png",
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
		image: "/certifcates/graphql-certificate.png",
		imageAlt: "GraphQL With React Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/graphql-with-react-course",
			},
		],
	},
	{
		title: "React (w/ Hooks and Redux) Certification",
		description:
			"Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
		image: "/certifcates/react-redux-certificate.png",
		imageAlt: "React (w/ Hooks and Redux) Certification Image",
		footerLinks: [
			{
				name: "Course Details",
				url: "https://www.udemy.com/course/react-2nd-edition",
			},
		],
	},
	{
		title: "Advanced CSS and Sass: Flexbox, Grid, Animation Certification",
		description:
			"The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more!",
		image: "/certifcates/sass-certificate.png",
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

const workExperiences = {
	display: true,
	experience: [
		{
			company: "Company A",
			role: "Software Engineer",
			date: "Jan 2021 - Present",
			desc: "Worked on several projects, including designing and implementing new features.",
			companyLogo: "",
			descBullets: [
				"Led a team of 5 engineers to develop a new product",
				"Implemented advanced features using React and Node.js",
				"Reduced project completion time by 20%",
			],
		},
		{
			company: "Company B",
			role: "Full Stack Developer",
			date: "Jun 2019 - Dec 2020",
			desc: "Developed web applications with a focus on performance and user experience.",
			companyLogo: "",
			descBullets: [
				"Improved application speed by 30%",
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

export {
	svgData,
	skillsData,
	educationInfo,
	certificates,
	workExperiences,
	projects,
};
