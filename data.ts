import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IProject, IService, ISkill } from "./type";
import { BsCircleFill } from "react-icons/bs";
import { NextCookies } from "next/dist/server/web/spec-extension/cookies";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about: "I can build a web and mobile applications",
    Icon: RiComputerLine,
    tools: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "React Native", "Material UI", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    about: "Handle database and api",
    Icon: FaServer,
    tools: ["Express", "Node.js", "Javascript", "Mongo DB"],
  },
];

//ISkill is the type of the aray
export const languages: ISkill[] = [
  {
    name: "Python",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "Scss",
    level: "90",
    Icon: BsCircleFill,
  },
  {
    name: "MongoSql",
    level: "30",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "50",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Photoshop",
    level: "10",
    Icon: BsCircleFill,
  },
  {
    name: "Figma",
    level: "20",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "YouTube Clone",
    description:
      "This application was build from React JS consisting of stunning video sections, custom categories, channel pages and the videos can be view directly in the YouTube Clone App",
    image_path: "/images/youtube-clone.jpg",
    deployed_url: "https://private-youtube.najwanorijan.website/",
    gitlab_url: "https://gitlab.com/najwanorijan/youtube-clone",
    category: ["react", "material ui", "rapidapi"],
    key_techs: ["ReactJS", "Material UI", "RapidAPI"],
  },
  {
    id: 2,
    name: "Flight Widget API",
    image_path: "/images/flight-widget.jpg",
    deployed_url: "/",
    gitlab_url: "https://gitlab.com/najwanorijan/flight-widget-api",
    category: ["javascript", "node", "rapidapi"],
    description:
      "Build a flight widget using NodeJS and real data from Toronto Pearson Airport from RapidAPI",
    key_techs: ["Javascript", "NodeJS", "RapidAPI"],
  },

  {
    id: 3,
    name: "Climate Change API",
    image_path: "/images/climate-change.jpg",
    deployed_url: "https://climatechangeapinajwa.herokuapp.com/news",
    gitlab_url: "https://gitlab.com/najwanorijan/climate-change-api",
    category: ["node", "express", "javascript"],
    description:
      "Climate Change API is an API that tells us climate change news from various websites such as Guardian, Los Angeles Times, New York Post, Evening Standard and many more by scraping from these websites by using Cheerio, which is a Javascript library",
    key_techs: ["Javascript", "NodeJS", "Express", "REST API"],
  },

  {
    id: 4,
    name: "Comic Chapters API",
    image_path: "/images/comic-chapter.jpg",
    deployed_url: "https://manga-searcher.herokuapp.com/",
    gitlab_url: "https://gitlab.com/najwanorijan/comic-chapters-api",
    category: ["node", "express", "javascript"],
    description:
      "The API was use to scrape all of the chapters exist for a particular comic from several websites",
    key_techs: ["Javascript", "NodeJS", "Express", "REST API"],
  },

  {
    id: 5,
    name: "Cupcake Store Website",
    image_path: "/images/cupcake-shopping-app.jpg",
    deployed_url: "/",
    gitlab_url: "https://gitlab.com/najwanorijan/cupcake-store-website",
    category: ["react", "redux", "node", "express", "mongo"],
    description:
      "Using React and Redux for frontend and Node, Express and MongoDB for backend.",
    key_techs: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
  },
  // {
  //   id: 6,
  //   name: "Spline 3D Website",
  //   image_path: "/images/spline-3d.png",
  //   deployed_url: "https://glistening-pithivier-06a612.netlify.app/",
  //   gitlab_url: "https://gitlab.com/najwanorijan/spline-3d-project",
  //   category: ["react", "spline"],
  //   description: "Developing a 3D website with Spline and React",
  //   key_techs: ["React", "Spline"],
  // },
];
