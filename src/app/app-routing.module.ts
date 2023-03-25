import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModelFactoryComponent } from './components/model-factory/model-factory.component';
import { ProjAnalyticsComponent } from './components/proj-analytics/proj-analytics.component';
import { ProjDetailComponent } from './components/proj-detail/proj-detail.component';
import { ProjFactoryComponent } from './components/proj-factory/proj-factory.component';
import { ReportComponent } from './components/report/report.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  {path:'survey', component:SurveyComponent},
  {path:'survey/:id/:name', component:SurveyFormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'proj', component:ProjFactoryComponent},
  {path:'proj_detail/:id', component:ProjDetailComponent},
  {path:'proj_detail/:id/analysis', component:ProjAnalyticsComponent},
  {path:'report', component:ReportComponent},
  {path:'model/:id', component:ModelFactoryComponent},
  {path:'**', redirectTo: '/proj', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
