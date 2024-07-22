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

selectedProjectId:number =0 
reports:any = 0
calc:any = 0
newSurvey={name:''}
constructor(public dataService: DataService, private route:ActivatedRoute, private router:Router, private http: HttpClient){}

create_survey(){
  // console.log(name)
  // console.log(this.dataservice.survey_data)
  this.router.navigate(['model', this.route.snapshot.params['id']])
}

temp_form(name:any){
  this.router.navigate(['survey', this.route.snapshot.params['id'], name])
}
ngOnInit(){
  this.selectedProjectId = this.route.snapshot.params['id']
  if (!this.dataService.currProject.name.length) {
    this.router.navigate(['proj'])
  }
}
}
