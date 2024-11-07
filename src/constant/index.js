import project1 from "../assets/projects/homepage- PM.jpg";
import project2 from "../assets/projects/e-commercefullstack.jpg";
import project3 from "../assets/projects/e-commerce-ss-laptop.jpg";
import project4 from "../assets/projects/android.jpg";

export const HERO_CONTENT = `Full-stack developer with experience developing and deploying Java SE and React Native projects for real clients. Built 9 projects to expand skills in Express.js, Next.js, Spring Boot, Angular, React, and Android, while also leveraging cloud technologies like AWS, Docker, Kubernetes and CI/CD.`;

export const ABOUT_TEXT = `Full-stack developer with experience developing and deploying Java SE and React Native projects for real clients. Built 9 projects to expand skills in Express.js, Next.js, Spring Boot, Angular, React, and Android, while also leveraging cloud technologies like AWS, Docker, Kubernetes and CI/CD.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Freelance Developer",
    company: "Fiverr.",
    description: `Delivered full-stack solutions using Java SE and React Native. Collaborated with clients to gather requirements, deploy applications, and ensure timely project completion.`,
    technologies: ["Java", "Javascript", "React.js", "Next.js", "mongoDB"],
  },

];

export const PROJECTS = [
  {
    title: "Project Management Application",
    image: project1,
    description:
      "A task management platform enabling drag-and-drop task organization with views like list, timeline, and table. Features include secure user authentication (AWS Cognito) and comprehensive project tracking..",
    technologies: [],
    frontendTechnologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Rechart", "Material UI"],
    backtendTechnologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL"],
    cloudTechnologies: ["Amazon EC2", "Amazon RDS", "Amazon Amplify", "Amazon S3", "Amazon Cognito"],
    github: "https://github.com/sesmiththaruka/project-management",
    livelink: "https://master.d142rl2eavcs9u.amplifyapp.com/"
  },
  {
    title: "Item exchange full stack web application",
    image: project2,
    description:
      "A full-stack application that allows users to manage items, collections, and engage with a community. Key features include user registration, secure email validation, item management (create, update, share, archive), borrowing with availability checks, item return functionality, and approval for returned items.",
    technologies: [],
    frontendTechnologies: ["Angular", "Bootstrap"],
    backtendTechnologies: ["Spring Boot 3", "Spring Security 6", "JWT Authentication", "Docker", "OpenAPI", "Keycloak"],
    github: "https://github.com/sesmiththaruka/lend-exchange.git"
  },
  {
    title: "E-Commerce Microservices System",
    image: project3,
    description:
      "Developed and deployed 5 microservices (Customer, Product, Payment, Notifications, Order)",
    technologies: [],
    backtendTechnologies: ["Spring Boot", "Spring Cloud", "Keycloak", "Docker", "MongoDB", "PostgreSQL", "Kafka", "Zipkin", "Eureka", "API Gateway"],
    github: "https://github.com/sesmiththaruka/e-commerce-API.git"
  },
  {
    title: "M-Commerce Android Application",
    image: project4,
    description:
      "Developed an app for discovering and purchasing event tickets, allowing users to create and manage public or private events.",
    technologies: [],
    frontendTechnologies: ["MVVM Architecture"],
    backtendTechnologies: ["Android", "Java", "REST API Communication"],
    cloudTechnologies: ["Firebase Authentication", "Firebase Firestore","Google Map API"],
    github:"https://github.com/sesmiththaruka/M-commerce-androidApplication.git"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+94 77 634 8896",
  email: "sesmith.tharuka@gmail.com",
};