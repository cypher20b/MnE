import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ProjFactoryComponent } from './components/proj-factory/proj-factory.component';
import { ModelFactoryComponent } from './components/model-factory/model-factory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ProjDetailComponent } from './components/proj-detail/proj-detail.component';
import { ReportComponent } from './components/report/report.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ProjAnalyticsComponent } from './components/proj-analytics/proj-analytics.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ProjFactoryComponent,
    ModelFactoryComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    ProjDetailComponent,
    ReportComponent,
    ProjAnalyticsComponent,
    SurveyFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
