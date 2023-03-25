import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proj-factory',
  templateUrl: './proj-factory.component.html',
  styleUrls: ['./proj-factory.component.scss']
})
export class ProjFactoryComponent implements OnInit {
  constructor(public dataservice:DataService, private apiservice:ApiService, private router:Router, private http:HttpClient){}
  createproj(){
    console.log(this.dataservice.new_projects_array);
    this.http.post(`${this.apiservice.saveData}`,{name:this.dataservice.new_projects_array.name, description:this.dataservice.new_projects_array.description, createdAt: new Date(), data:JSON.stringify([])}).subscribe((res:any)=>{
      console.log(res);
      // this.dataservice.projects_array.push(this.dataservice.new_projects_array)
      this.dataservice.new_projects_array = {name: '',createdAt:'',updatedAt:'', description:'', data:[]}
      
    })
  }
  editproj(id:any){
    console.log(this.dataservice.projects_array)
        this.router.navigate(['proj_detail',id])

  }
  mynamefnx(name:any){
    console.log(name)
  }

  ngOnInit(){
    this.dataservice.projects_array = []
    this.dataservice.updateProjArray('new')
    this.dataservice.proj_loaded = true
  }
}
