export interface Survey{
    name:string, 
    questions:any[], 
    calculations:any[], 
    reports:any[],
    createdAt?: Date,
    updatedAt?: Date
}

export interface SurveyQuestion{
    text:string,
    type:string,
    offeredAnswers?:string[]
}