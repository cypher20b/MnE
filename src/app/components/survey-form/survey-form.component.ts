import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
interface ans{
  question_text:string,
  answer:any
}
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit{
  survey:any = []
  answersForm:ans[] =[]
  radioSelected:any
  checkSelected:any 
  constructor(
    public dataservice: DataService, 
    private route:ActivatedRoute, 
    private router:Router,
    private formBuilder:FormBuilder
    ){}
  onRadioSelect(question:any, i:any, data:any){
    console.log(question)
    // this.radioSelected = ''
    // this.survey.questions[i].posible_answers[i] = this.radioSelected
    // console.log(this.survey.questions[i].posible_answers[i])
    for (let i = 0; i < this.answersForm.length; i++) {
      if (this.answersForm[i].question_text === question.question_text) {
        this.answersForm[i].answer = data
        console.log(this.answersForm[i])
      }
    }
  }
  onCheckSelect(question:any, event:any, data:any){
    console.log(event.checked)
    for (let i = 0; i < this.answersForm.length; i++) {
      if (this.answersForm[i].question_text === question.question_text) {
        if (event.checked) {
          this.answersForm[i].answer.push(data)
          console.log(this.answersForm[i])
        }
        else{
          for (let j = 0; j < this.answersForm[i].answer.length; j++) {
            if (this.answersForm[i].answer[j]===data) {
              this.answersForm[i].answer.splice(this.answersForm[i].answer.indexOf(this.answersForm[i].answer[j]), 1)
              console.log(this.answersForm[i])
            }
          }
        }
      }
    }
  }
  answered_data(){
    console.log(this.answersForm)
  }
  onFormSubmit(form: NgForm) {
    console.log(form)
  }
  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    this.survey =(()=>{
      for (let i = 0; i < this.dataservice.projects_array.length; i++) {
        if (this.dataservice.projects_array[i].id === Number(this.route.snapshot.params['id'])) {
          for (let j = 0; j < this.dataservice.projects_array[i].data.length; j++) {
            console.log(this.dataservice.projects_array[i].data)
            if (this.dataservice.projects_array[i].data[j].name === this.route.snapshot.params['name']) {
              console.log('seeeeee')
              return this.dataservice.projects_array[i].data[j]
              }
          }
        } else{
          console.log('failed to get project list')
          return []
        }
      }
    })()
    // console.log(this.dataservice.projects_array)
    
    for (let i = 0; i < this.survey.questions.length; i++) {
      if (this.survey.questions[i].question_type === "checkbox") {
        let data = {question_text: '', answer:[]}
        data.question_text = this.survey.questions[i].question_text
        this.answersForm.push(data)
      } else {
        let data = {question_text: '', answer:''}
        data.question_text = this.survey.questions[i].question_text
        this.answersForm.push(data)
      }
      
    }
    console.log(this.survey)
    console.log(this.answersForm)
    // console.log(this.route.snapshot.params['name'])
  }
}
