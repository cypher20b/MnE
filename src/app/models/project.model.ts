import { Project } from "../interfaces/project";
import { v4 as uuidv4 } from 'uuid';

export class ProjectModel implements Project {
    id:string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    data: any[];
  
    constructor(name: string, description: string, data: any[], createdAt?: Date, updatedAt?: Date) {
      this.id= uuidv4();
      this.name = name;
      this.createdAt = createdAt ? createdAt : new Date();
      this.updatedAt = updatedAt ? updatedAt : new Date();
      this.description = description;
      this.data = data;
    }
  
    update(updatedData: Partial<Project>) {
      if (updatedData.name !== undefined) {
        this.name = updatedData.name;
      }
      if (updatedData.createdAt !== undefined) {
        this.createdAt = updatedData.createdAt;
      }
      if (updatedData.updatedAt !== undefined) {
        this.updatedAt = updatedData.updatedAt;
      }
      if (updatedData.description !== undefined) {
        this.description = updatedData.description;
      }
      if (updatedData.data !== undefined) {
        this.data.push(updatedData.data);
      }
      this.updatedAt = new Date();
    }
  }
  