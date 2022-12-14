import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
  tools: string[];
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  gitlab_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "react"
  | "node"
  | "express"
  | "mongo"
  | "material ui"
  | "javascript"
  | "rapidapi"
  | "redux"
  | "spline";
