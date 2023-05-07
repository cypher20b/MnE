import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proj-detail',
  templateUrl: './proj-detail.component.html',
  styleUrls: ['./proj-detail.component.scss']
})
export class ProjDetailComponent implements OnInit {

selected_surveys:any 
reports:any = 0
calc:any = 0
constructor(public dataservice: DataService, private route:ActivatedRoute, private router:Router, private http: HttpClient){}

create_survey(){
  // console.log(name)
  console.log(this.dataservice.survey_data)
  this.router.navigate(['model', this.route.snapshot.params['id']])
}

temp_form(name:any){
  this.router.navigate(['survey', this.route.snapshot.params['id'], name])
}
ngOnInit(){
  // console.log(this.route.snapshot.params['id'])
  // this.selected_surveys = this.http.get()
  console.log(this.dataservice.surveys)
  console.log(this.dataservice.projects_array)
  // console.log(Number(this.route.snapshot.params['id']))
  this.selected_surveys = (()=>{
    for (let i = 0; i < this.dataservice.projects_array.length; i++) {
      console.log(this.dataservice.projects_array[i].id, Number(this.route.snapshot.params['id']), 'arr_length:'+this.dataservice.projects_array.length)
      if (this.dataservice.projects_array[i].id === Number(this.route.snapshot.params['id'])) {
        console.log('seeeeee')
        // this.dataservice.surveys = this.dataservice.projects_array[i].data.length
        return this.dataservice.projects_array[i].data
      } else{
        if (i=== this.dataservice.projects_array.length) {
          console.log('failed to get project list')
          return []
        }
      }
    }
  })()
  // this.dataservice.projects_array = []
//   this.dataservice.updateProjArray(Number(this.route.snapshot.params['id']))
//   setTimeout(() => {
    
//     // this.surveys = this.dataservice.surveys
//     console.log(this.dataservice.surveys)
//     this.dataservice.survey_data = {name:'', questions:[], calculations:[], reports:[]}
    
//   }, 1000);
}
}
