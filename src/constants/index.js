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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  k2,
  votronic,
  moveo,
  cecos,
  k2x,
  drupak,
  hoop,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Client Satisfaction",
    icon: mobile,
  },
];

const technologies = [
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
  {
    name: "Three JS",
    icon: threejs,
  },
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

const experiences = [
  {
    title: "Junior FrontEnd Developer",
    company_name: "Drupak",
    icon: drupak,
    iconBg: "#fff",
    date: "April 2021 - May 2023 | 2 years, 1 month",
    points: [
      "Worked closely with senior developers and actively contributed to development and implementation of responsive web designs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Drupak allowed me to develop a strong understanding of front-end development principles and best practices.",
    ],
  },
  {
    title: "FrontEnd Developer React",
    company_name: "K2X Tech",
    icon: k2x,
    iconBg: "#fff",
    date: "2 months | June 2023 - August 2023",
    points: [
      "Managed and contributed to the development of innovative web applications, overseeing the implementation of front-end functionality and optimizing website performance.",
      "Collaborated with cross-functional teams to translate design mockups into responsive, user-friendly interfaces.",
      "Delivered projects within tight deadlines using Agile methodologies, ensuring efficient sprint planning and execution.",
    ],
  },
  {
    title: "Team Lead Developer React",
    company_name: "Hoop Interactive",
    icon: hoop,
    iconBg: "#fff",
    date: "August 2023 - June 2024 | 10 months",
    points: [
      "Spearheaded the development of advanced React.js applications, focusing on performance, modularity, and maintainability.",
      "Worked closely with back-end teams to integrate APIs, enhance state management, and implement real-time features.",
      "Provided technical guidance and established best practices for front-end development.",
    ],
  },
  {
    title: "Operations Executive",
    company_name: "CECOS College London IT Services",
    icon: cecos,
    iconBg: "#fff",
    date: "July 2024 - Present",
    points: [
      "Expertly managed the verification and validation of user-submitted records, ensuring data accuracy and integrity.",
      "Executed the development and implementation of innovative data management strategies, leveraging Microsoft 365 and other online platforms to optimize data handling and collaboration.",
      "Maintained strong communication with users and clients, addressing their needs and resolving issues promptly",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "MOVEO",
    description:
      "A subscription-based Web Application that allows users to search their favorite movie, view and watch, new trending movies seamlessly over the application without any Ads.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: moveo,
    
  },
  {
    name: "Votronic",
    description:
      "A Decentralized Immutable Online Voting Platform that uses Blockchain Technology, enabling users to cast their votes from around the world, Seamlessly, Transparently and Securely.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "solidity",
        color: "red-text-gradient",
      },
    ],
    image: votronic,
    source_code_link: "https://github.com/",
  },
  {
    name: "K2X Company Website",
    description:
      "An IT services providing company's Website that allows users to overview the company's clients worked with, collaborations, motivation, services, team and contact details.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: k2,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
