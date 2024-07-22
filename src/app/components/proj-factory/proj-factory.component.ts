import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectModel } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proj-factory',
  templateUrl: './proj-factory.component.html',
  styleUrls: ['./proj-factory.component.scss']
})
export class ProjFactoryComponent implements OnInit {
 project:Project = {name:'', description:''}
 updateBool:boolean = false;
 updateId:number = 0;
  constructor(public dataservice:DataService, private apiservice:ApiService, private router:Router, private http:HttpClient){}

  updateProject(){
    // console.log(id)
    // this.dataservice.newProject.update({ name:this.project.name,description:this.project.description,data: [{name:'multiple choice', questions:[],calculations:[],reports:[]}] });
    this.dataservice.projectsArray[this.updateId].update({ name:this.project.name,description:this.project.description });
    this.project = {name:'', description:''}
    this.updateBool = false;
    this.updateId = 0;
  }
  createProj(){
    let proj = new ProjectModel(this.project.name, this.project.description,[])
    this.dataservice.projectsArray.push(proj)
    this.project = {name:'', description:''}
    // console.log(this.dataservice.projectsArray)
  }
  editProj(id:any){
    this.updateBool = true;
    this.project.name=this.dataservice.projectsArray[id].name
    this.project.description=this.dataservice.projectsArray[id].description
    this.updateId = id
    // this.router.navigate(['proj_detail',id])
  }
  openProj(id:any){
    this.dataservice.currProject = this.dataservice.projectsArray[id]
    this.router.navigate(['proj_detail',id])
  }
  ngOnInit(){
  }
}
