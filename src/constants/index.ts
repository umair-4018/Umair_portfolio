import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
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
  kinectro,
  bjs,
  gorex,
  influencifyImg,
  gorexImg,
  precurementImg,
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
      "Collaborating with Mr. Umair has been a great experience. His enthusiasm and commitment make him a valued team player. He consistently demonstrates strong problem-solving skills and a keen adaptability to modern technologies, making him an outstanding software developer.", name: "Umair Khalid",
    designation: "Senior Software Engineer",
    company: "NINE ALPHA GLOBAL COMPUTING PVT LTD (INTAGLEO) ",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQE_wGmyFNLduw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719440434040?e=1730451600&v=beta&t=0M34F6-fRpjYyR2SCqH-FkzqsJlRyRReOudUF79ijlM",
  },
  {
    testimonial: "I have worked with Umair for the past 2 years, collaborating on numerous projects. His technical expertise and problem-solving skills are exceptional, always offering multiple solutions to challenges. What truly sets him apart is his ability to enhance the productivity of the entire team, making him an invaluable asset.",
    name: "Ahsan Khan",
    designation: "Senior Software Engineer",
    company: "Kinectro Technology",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFfpimyoLX1cg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703571563223?e=1735171200&v=beta&t=7gxl_svwyrY5B2i_f1jXjQSkRG49ZhSFoICkdo-9O18",
  },
  {
    testimonial:"Working with Mr. Umair has been a rewarding experience. His attention to detail, combined with his ability to tackle complex problems, showcases his expertise as a developer. He is proactive, reliable, and consistently delivers high-quality solutions, making him an integral part of any team.",
    name: "Muhammad Dayaan",
    designation: "CTO",
    company: "DSME Global Links",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGpDM4kG-305g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1632606587984?e=1735171200&v=beta&t=UmSuRw9M8ODBny9_Aiyh2dCv-MONh5TX-5kpWZhX704",
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
    description: "ProcurementLeague is a web application that streamlines course registration, student management, and RFQ (Request for Quotation) handling. It enables students to register for courses, manage purchases, and receive rewards based on RFQ outcomes. The platform ensures a seamless experience for both students and administrators, optimizing procurement and educational workflows while facilitating efficient contract management.",
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
