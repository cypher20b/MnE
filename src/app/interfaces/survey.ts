export interface Survey{
    name:string, 
    questions:any[], 
    calculations:any[], 
    reports:any[],
    createdAt?: Date,
    updatedAt?: Date
}