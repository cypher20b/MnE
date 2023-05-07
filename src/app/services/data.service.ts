import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  proj_loaded = false;
  surveys:any
  surveys_date:any
  projects_array:any=[
    // {name: 'test proj1', description:' grade 4 performance', data:[{name:'survey', questions:[{question_text:'', q_id:''}], calculations:''}]},
    // {name: 'test proj1', description:'this is a proj for measuring students grade 4 performance', data:[{name:'survey', questions:[{question_text:'', q_id:''}], calculations:''}]},
    // {name: 'test proj1', description:'this is a proj for measuring students grade 4 performance', data:[{name:'survey', questions:[{question_text:'', q_id:''}], calculations:''}]},
  ] 
  survey_data:any = {name:'', questions:[], calculations:[], reports:[]}
  new_projects_array:any=
    {name: '',createdAt:'',updatedAt:'', description:'', data:[]}
    // {name: '', description:'', data:[{model:{type:'', questions:[], calculations:''}}]}
  
  constructor(private http: HttpClient, private apiservice: ApiService) { }
  updateProjArray(id:any){
    this.projects_array=[]
    console.log(this.surveys)
  this.http.get(this.apiservice.pullData).subscribe((res:any)=>{
    console.log(res)
    for (let i = 0; i < res.length; i++) {
      
      this.projects_array.push(res[i])
      this.surveys = 0
      if (res[i].data === null) {
        res[i].data = []
      // this.projects_array.push(res[i])
      // this.surveys = 0
      // console.log(this.projects_array)
      } 
      // else {
      //   this.http.get(this.apiservice.pullData).subscribe((res:any) =>{
      //     for (let j = 0; j < res.length; j++) {
      //       if (res[j] === id) {
      //         res[j].data = JSON.parse(res[j].data)
      //         this.projects_array=[]
      //         this.surveys_date = res[j].updatedAt.split('T')[0]
      //         this.projects_array.push(res[j])
      //         this.surveys = res[j].data.length
      //         console.log(this.surveys)
      //       } else {
      //         // res[j].data = JSON.parse(res[j].data)
      //         this.projects_array.push(res[j])
      //         console.log(this.projects_array)
      //       }
      //     }
      //   })
      //   // if (res[i].id === id) {
      //   //   res[i].data = JSON.parse(res[i].data)
      //   //   this.projects_array=[]
      //   //   this.surveys_date = res[i].updatedAt.split('T')[0]
      //   //   this.projects_array.push(res[i])
      //   //   this.surveys = res[i].data.length
      //   //   console.log(this.surveys)
      //   // }
      //   //  else {
      //   //   res[i].data = JSON.parse(res[i].data)
      //   //   this.projects_array.push(res[i])
      //   //   console.log(this.projects_array)
      //   // }
        
      // }
    }
    // this.projects_array = [...new Set(this.projects_array)]
    console.log(this.surveys)
    console.log(this.projects_array)
  })

  }
}
