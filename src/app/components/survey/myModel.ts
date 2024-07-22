import { AnswersFormat } from "src/app/interfaces/answer"

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
        public name: string,
        public description: string,
        public pageFlow: {
          nextPage: boolean,
          label: string
        },
        public elements: element[],
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
          OfferedAnswers:AnswersFormat[]
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
   
