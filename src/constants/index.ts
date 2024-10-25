import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  kinectro,
  bjs,
  gorex,
  influencifyImg,
  gorexImg,
  precurementImg,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Kinectro",
    icon: kinectro,
    iconBg: "#ffffff",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Developing and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to build scalable and efficient applications.",
      "Implementing responsive designs with React.js, ensuring cross-browser compatibility, and optimizing performance across the stack.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Developer",
    companyName: "BJS Soft Solution Pvt Ltd - Secure Solution Providers",
    icon: bjs,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and related technologies, such as Redux, React Router, and Material UI.",
      "Collaborating with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and user-friendly interfaces.",
      "Implementing responsive design principles with React, ensuring optimal performance and cross-browser compatibility.",
      "Participating in code reviews, providing feedback to improve code quality, maintainability, and adherence to best practices in React.js development.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Go and Relax PVT LTD",
    icon: gorex,
    iconBg: "#ffffff",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using both frontend (React.js) and backend technologies (Node.js, Express.js) along with databases (MongoDB, SQL).",
      "Collaborating with cross-functional teams, including designers, product managers, and backend/frontend developers, to build scalable and high-quality products.",
      "Implementing responsive design on the frontend with React.js, ensuring seamless cross-browser compatibility, while optimizing backend performance and API integration.",
      "Participating in full-stack code reviews, offering constructive feedback across both frontend and backend components to ensure robust, maintainable code and adherence to best practices.",
    ],
  },

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Influencify",
    description:
      "Developed and optimized the Influencify platform, a marketplace that connects brands and influencers across social media platforms (Facebook, TikTok, YouTube, Instagram). The platform facilitates collaborations through an escrow payment system, ensuring secure transactions between brands and influencers. Focused on the frontend development, integrating APIs and improving user experience for seamless campaign management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: influencifyImg,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Go and Relax PVT LTD",
    description:
      "Led the full stack development of the Gorex digital fleet card platform, covering web and mobile applications. Built and optimized APIs to support mobile app functionality, provided backend guidance, and mentored junior developersacross the team. Delivered key improvements to the performance, security, and scalability of 4 dashboards (Corporate,Fuel Station, OMC, Admin).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gorexImg,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "ProcurementLeague",
    description:"ProcurementLeague is a web application that streamlines course registration, student management, and RFQ (Request for Quotation) handling. It enables students to register for courses, manage purchases, and receive rewards based on RFQ outcomes. The platform ensures a seamless experience for both students and administrators, optimizing procurement and educational workflows while facilitating efficient contract management.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: precurementImg,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
