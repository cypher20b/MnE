import { v4 as uuidv4 } from 'uuid';
import { Survey } from '../interfaces/survey';
import { Question } from '../interfaces/question';

export class SurveyModel implements Survey {
    id:string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    questions:Question[];
    calculations:any[];
    reports:any[];
  
    constructor(name: string, questions: any[], calculations: any[],reports: any[], createdAt?: Date, updatedAt?: Date) {
      this.id= uuidv4();
      this.name = name;
      this.createdAt = createdAt ? createdAt : new Date();
      this.updatedAt = updatedAt ? updatedAt : new Date();
      this.questions = questions;
      this.calculations = calculations;
      this.reports = reports;
    }

    addQuestion(updatedData:any){
      this.questions.push({id:uuidv4(), text:updatedData.text,type:updatedData.type,offeredAnswers:[]})
    }
  
    update(updatedData: Partial<Survey>) {
      if (updatedData.name !== undefined) {
        this.name = updatedData.name;
      }
      if (updatedData.createdAt !== undefined) {
        this.createdAt = updatedData.createdAt;
      }
      if (updatedData.updatedAt !== undefined) {
        this.updatedAt = updatedData.updatedAt;
      }
      // if (updatedData.questions !== undefined && updatedData.questions.length>0) {
      //   this.questions.push(updatedData.questions)
      // }
      if (updatedData.calculations !== undefined && updatedData.calculations.length>0) {
        this.calculations.push(updatedData.calculations)
      }
      if (updatedData.reports !== undefined && updatedData.reports.length>0) {
        this.reports.push(updatedData.reports)
      }
      this.updatedAt = new Date();
    }
  }
  