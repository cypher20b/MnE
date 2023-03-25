import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateproj = 'https://mnebe.ask-africa.com/updateprj'
  pullData = 'https://mnebe.ask-africa.com/getProj'
  saveData = 'https://mnebe.ask-africa.com/save'
  constructor() { }
}
