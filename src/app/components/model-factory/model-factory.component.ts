import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-model-factory',
  templateUrl: './model-factory.component.html',
  styleUrls: ['./model-factory.component.scss']
})
export class ModelFactoryComponent implements OnInit{
answers:any=[]
type = 'default'
calc_array = 'default'
radio_with_textbox:any = false
calc:any = {name:'',equation:[]}
math_symbols:any = ['=','>','<','&#x2260;','>=','<=']
show_radio = false
show_select = false
show_dropdown = false
input_answer =''
input_question = ''
dropdown_list:any
indicator = {
  name:'',
  type:['success rate',''],
  associate_questions:[],

}
constructor(public dataservice:DataService,private apiservice:ApiService, private router:Router, private route: ActivatedRoute, private http:HttpClient){}
  create_new_item_monitor(){
    // this.router.navigate(['model'])
    // this.dataservice.new_projects_array.data.type='tracker'
    // console.log(this.dataservice.new_projects_array)
  }

  create_survey(name:any){
    console.log(name)
    console.log('this.dataservice.survey_data.name')
  }

  fn_radio_with_textbox(event:any){
    this.radio_with_textbox = event.checked
    console.log(this.radio_with_textbox)
  }
  create_new_survey(){
    // this.dataservice.new_projects_array.data.type='survey'
    // console.log(this.dataservice.new_projects_array)
    // this.router.navigate(['model'])
  }

  append_new_question(text:any){
    console.log(text)
    this.dataservice.newSurvey.update({questions:[text]})
    // this.dataservice.new_projects_array.data[0].model.questions.push({question_text:text, q_id:'', question_type:this.type, posible_answers:this.answers})
    // if (this.show_dropdown && this.dropdown_list) {
    //   this.dropdown_list = this.dropdown_list.split(',')
    //   this.dataservice.survey_data.questions.push({question_text:text, q_id:'', question_type:this.type, posible_answers:this.dropdown_list})
    //   console.log(this.dataservice.survey_data)
    //   this.answers = []
    //   this.type='default'
    //   this.input_question = ''   
    //   this.dropdown_list = false
    // } else {
    //   this.dataservice.survey_data.questions.push({question_text:text, q_id:'', question_type:this.type, posible_answers:this.answers})
    //   console.log(this.dataservice.survey_data)
    //   this.answers = []
    //   this.type='default'
    //   this.input_question = ''    
    // }

  }

  add_answer_with_textbox(new_answer:any){
    console.log({new_answer, added_value:true})
    this.answers.push({new_answer:new_answer, added_value:true})
    this.input_answer = ''
    this.radio_with_textbox = false
  }

  add_answer(new_answer:any){
    this.answers.push(new_answer)
    this.input_answer= ''
  }

  question_type(){
    switch (this.type) {
      case 'text':
        console.log('text')
        this.type ='text'
        break;
      case 'number':
        console.log('number')
        this.type ='number'
        break;
      case 'date':
        console.log('date')
        this.type ='date'
        break;
      case 'boolean':
        console.log('boolean')
        this.show_dropdown = false
        this.show_radio = false
        this.show_select = false
        break;
      case 'radio':
        console.log('radio')
        this.show_radio = true
        this.show_select = false
        this.show_dropdown = false
        break;
      case 'checkbox':
        console.log('checkbox')
        this.show_radio = false
        this.show_select = true
        this.show_dropdown = false
        break;
      case 'select':
        console.log('select')
        this.show_radio = false
        this.show_select = false
        this.show_dropdown = true
        break;
    
      default:
        // this.type ='txt'
        // this.
        // this.show_radio = false
        // this.show_select = false
        break;
    }
    // this.type =''
  }

  go_to_dashboard(){
    // console.log(this.route.snapshot.params['id'], this.dataservice.survey_data)
    for (let i = 0; i < this.dataservice.projectsArray.length; i++) {
      if (this.dataservice.projectsArray[i].id === Number(this.route.snapshot.params['id'])) {
        console.log(this.dataservice.projectsArray[i].data)
        // let updatedSurveyList = this.dataservice.projects_array[i].data.push(this.dataservice.survey_data)
        console.log('///////////////////////////////////////////////')
        console.log('updatedSurveyList')
        console.log('///////////////////////////////////////////////')
        let dataToBeUpdated = []
        // dataToBeUpdated.push(this.dataservice.survey_data)
        // this.http.post(this.apiservice.updateproj, {name:this.dataservice.survey_data.name, data:JSON.stringify(dataToBeUpdated), id:this.dataservice.projects_array[i].id}).subscribe((res:any)=>{
        //   console.log(res)
        //   this.dataservice.updateProjArray(this.dataservice.projects_array[i].id)
        //   this.router.navigate(['proj_detail', this.route.snapshot.params['id']])
        // })
        // this.dataservice.projects_array[i].data.push(this.dataservice.survey_data)
      }
    }

  }

  pop_option(option:any){
    this.answers.pop(option)
  }
  append_new_calc(param: any){

  }

  // first_click=true
  // selected_calc(){
  //   if (this.first_click === false) {
  //     console.log(this.calc_type);
  //     this.first_click = true

  //     switch (this.calc_type) {
  //       case 'equation':
  //         // this.math_symbols = ['Σ','()', 'of','/', 'x','+','-']

  //         console.log('a+b=c')
  //         break;
  //       case 'inequality':
  //         // this.math_symbols = ['Σ','()', 'of','/', 'x','+','-']
  //         console.log('a+b<c or a+b>c')
  //         break;
      
  //       case 'quadratic':
  //         console.log('ax')
  //       break;
      
  //       default:
  //         break;
  //     }
  //   } else {
  //     this.first_click = false
  //   }
    
  // }

  onEnter(name:any){
    this.calc.name=name
    console.log('typed enter')
  }
  eq_type(symb:any){
    this.calc.equation[0]=symb
    console.log(this.calc.equation);
    
  }
  ngOnInit(){
    // this.dataservice.survey_data = {name:'', questions:[], calculations:[], reports:[]}
    // this.dataservice.new_projects_array ={name: '',createdAt:'',updatedAt:'', description:'', data:[]}
  }
}
