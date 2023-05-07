import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateproj = 'http://localhost:3000/updateprj' //'https://mnebe.ask-africa.com/updateprj'
  pullData = 'http://localhost:3000/getProj'  //'https://mnebe.ask-africa.com/getProj'
  pullSurvey = 'http://localhost:3000/getSurvey'  //'https://mnebe.ask-africa.com/getProj'
  saveData = 'http://localhost:3000/save'  //'https://mnebe.ask-africa.com/save'
  constructor() { }
}
