export class OfferedAnswers {
    constructor(
        public description: string,
        public pages:Array<page>
    ){}
  }
  
  export class page {
    constructor(
        public id: string,
        public number: number,
        public name: any,
        public description: any,
        public pageFlow: {
          nextPage: boolean,
          label: string
        },
        public elements: Array<element>,
        public namedPage: boolean,
        public isFirst: boolean,
        public isLast: boolean
    ){}
  }
  
  export class element {
    constructor(
        public id: string,
        public orderNo: number,
        public type: string,
        public question: {
          id: string,
          text: string,
          type: string,
          required: boolean,
          pageFlowModifier: boolean
          OfferedAnswers:Array<answersFormat>
        }
        
    ){}
  }
  
  export class pageElement {
    constructor(
        public id: string,
        public orderNo: number,
        public type: string,
        public paragraph: {
          id: string,
          text: string,
          title: string,
        }
    ){}
  }
  
  export class imageElement {
    constructor(
        public id: string,
        public orderNo: number,
        public type: string,
        public image: {
          id: string,
          text: string,
          blob: string,
        }
    ){}
  }
   
  interface answersFormat {
    id:string
    orderNo:number
    pageFlow:{
      nextPage:boolean,
      label:string
    }
  }