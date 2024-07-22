import { Survey } from "./survey";

export interface Project {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    description: string;
    data?: Survey[];
  }