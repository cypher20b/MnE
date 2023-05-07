import { Component, Inject } from '@angular/core';
import { OfferedAnswers, element, imageElement, page, pageElement } from './myModel';
// import { OfferedAnswers } from './modelz/offered-answers';
import { FormControl, Validators } from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent {
  surveyName = new FormControl('', [Validators.required]);
  description = new FormControl('');
  named:boolean = false
  pageName = ""
  pageDescription = ""
  title = 'surveryTemplate';
  data:any ={
    surveyTitle: this.surveyName.value,
    surveyDescription: this.description.value,
    pages: []
}
  question={text:'', type:''}
  element:any
  pageData:any
  
  // paginator
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent!: PageEvent;




  constructor(public dialog: MatDialog) {}
  // logdata(){
  //   console.log(this.description, this.surveyName)
  // }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }


  getErrorMessage() {
    if (this.surveyName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.surveyName.hasError('email') ? 'Not a valid email' : '';
  }
  
  // start
  // 
  addElement(i:any, type:any){
    let index = this.data.pages[i].elements.length
    console.log(i, index, type)
    if (type === "question") {
      this.element = new element("",0 ,"",{id:'',text:'', type:'', required:false, pageFlowModifier:false, OfferedAnswers:[]})
      this.CreateQuestionPage(i, index, type)
    }
    if (type === "paragraph") {
      this.element = new pageElement("",0 ,"",{id:'',text:'',title:''})
      console.log(this.element)
      this.CreateParagraphPage(i, index, type)
    }
    if (type === "image") {
      this.element = new imageElement("",0 ,"",{id:'',text:'',blob:''})
      this.CreateImagePage(i, index, type)
    }
  }
  createPage(){
    this.pageData = new page('', 0, "", "",{nextPage: false,label: ""},[],false,true,false)
    this.data.pages.push(this.pageData)
    console.log(this.data)
  }
  deletePage(i:any){
    let popper = this.data.pages.indexOf(this.data.pages[i])
    this.data.pages.splice(popper, 1)
  }
CreateQuestionPage(pageIndex:any, elementIndex:any, type:any): void {
  const dialogRef = this.dialog.open(QuestionDialog, 
    {data: {question: '', type: '', required:false, OfferedAnswers: [],elementType:type},hasBackdrop:false}
  );
  dialogRef.afterClosed().subscribe(result => {
    if(result==='false'){
      
      this.data.pages[pageIndex].elements.splice(elementIndex, 1)
      console.log('action cancelled')
    }else{
      this.element.id= uuidv4()
      this.element.orderNo= elementIndex
      this.element.type= type
      this.element.question.id= uuidv4()
      this.element.question.text = result.question
      this.element.question.type = result.type
      this.element.question.required = result.required
      this.element.question.OfferedAnswers = result.OfferedAnswers
      this.data.pages[pageIndex].id= this.data.pages[pageIndex].id?.length || uuidv4()
      this.data.pages[pageIndex].namedPage= this.data.pages[pageIndex].namedPage?.length || this.named
      this.data.pages[pageIndex].name= this.data.pages[pageIndex].name?.length || this.pageName
      this.data.pages[pageIndex].elements.push(this.element)
      this.element = {}
      console.log(this.data);
    }
  });
}

CreateParagraphPage(pageIndex:any, elementIndex:any, type:any): void {
  const dialogRef = this.dialog.open(QuestionDialog, 
    {data: {paragraph:{text: '',title: ''}, elementType:type},hasBackdrop:false}
  );

  dialogRef.afterClosed().subscribe(result => {
    if(result==='false'){
      this.data.pages[pageIndex].elements.splice(elementIndex, 1)
      console.log('action cancelled')
    }
    if (result.elementType === 'paragraph') {

        this.element.id= uuidv4()
        this.element.orderNo= elementIndex
        this.element.type= result.elementType
        this.element.paragraph.id= uuidv4()
        this.element.paragraph.text = result.paragraph.text,
        this.element.paragraph.title = result.paragraph.title,
        this.data.pages[pageIndex].id= this.data.pages[pageIndex].id?.length || uuidv4()
        this.data.pages[pageIndex].namedPage= this.data.pages[pageIndex].namedPage?.length || this.named
        this.data.pages[pageIndex].name= this.data.pages[pageIndex].name?.length || this.pageName
        this.data.pages[pageIndex].elements.push(this.element)
        this.element = {}
        console.log(this.data)
    }
  });
}

CreateImagePage(pageIndex:any, elementIndex:any, type:any): void {
  const dialogRef = this.dialog.open(QuestionDialog, 
    {data: {image:{text: '',imageBlob: ''}, elementType:type},hasBackdrop:false,}
  );

  dialogRef.afterClosed().subscribe(result => {
    if(result==='false'){
      
      this.data.pages[pageIndex].elements.splice(elementIndex, 1)
      console.log('action cancelled')
    }
    if (result.elementType === 'image') {
      this.element.id= uuidv4()
      this.element.orderNo= elementIndex
      this.element.type= result.elementType
      this.element.image.id= uuidv4()
      this.element.image.text = result.image.text,
      this.element.image.imageBlob = result.image.imageBlob,
      this.data.pages[pageIndex].id= this.data.pages[pageIndex].id?.length || uuidv4()
      this.data.pages[pageIndex].namedPage= this.data.pages[pageIndex].namedPage?.length || this.named
      this.data.pages[pageIndex].name= this.data.pages[pageIndex].name?.length || this.pageName
      this.data.pages[pageIndex].elements.push(this.element)
      this.element = {}
      console.log(result);
      console.log(this.data);
    
    }
  });
}
}


// 
interface dialogData{
  question:string,
  type:string,
  required:boolean,
  OfferedAnswers:Array<any>,
  elementType:string,
  paragraph:{title:string, text:string}
  image:{text:string, imageBlob:string}
}
@Component({
selector: 'question-dialog',
templateUrl: 'question-dialog.html',
styleUrls: ['./survey.component.css']
})

export class QuestionDialog {
  otherOption=false;
  answerTextBox =''
  // start of range
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = false;
  value = 0;
  // end of range
  questionTypes = [
    {value: 'text', viewValue: 'Short Text'},
    {value: 'textarea', viewValue: 'Long Text'},
    {value: 'radio', viewValue: 'Radio'},
    {value: 'checkbox', viewValue: 'Checkboxes'},
    {value: 'select', viewValue: 'Select'},
    // {value: 'grid', viewValue: 'Grid'},
    // {value: 'priority', viewValue: 'Prioty'},
    // {value: 'division', viewValue: 'Division'},
    {value: 'number', viewValue: 'Number'},
    {value: 'date', viewValue: 'Date'},
    {value: 'time', viewValue: 'Time'},
    {value: 'email', viewValue: 'Email'},
    {value: 'range', viewValue: 'Range'},
    {value: 'url', viewValue: 'Url'},
  ];
constructor(
  public dialogRef: MatDialogRef<QuestionDialog>,
  @Inject(MAT_DIALOG_DATA) public data:dialogData,
) {}

selectImage(e:any){
  if (e.target.files) {
    if (e.target.files.item(0)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.data.image.imageBlob = e.target.result;
      };

      reader.readAsDataURL(e.target.files.item(0));
    }
  }
}


deleteImage(){
  this.data.image.imageBlob = ''
}

add_answer(newAnswer:any){
  if (newAnswer === "new_answer.value_xyz123abc") {
    this.data.OfferedAnswers = [{max:this.max, min:this.min, value:this.value,step:this.step}]
    this.max =100
    this.min = 0;
    this.step = 1;
    this.thumbLabel = false;
    this.value = 0;
    console.log(this.data)
  }else{
this.data.OfferedAnswers.push({Answer:newAnswer,otherOption:this.otherOption})
}

console.log(this.data)
this.answerTextBox = ''
this.otherOption = false
}

pop_option(item:any){
 let popper = this.data.OfferedAnswers.indexOf(this.data.OfferedAnswers[item])
 this.data.OfferedAnswers.splice(popper, 1)
  console.log(this.data.OfferedAnswers)
}
logOtherOptions(){
  console.log(!this.otherOption)
}
onNoClick(): void {
  this.dialogRef.close();
}
}


 
