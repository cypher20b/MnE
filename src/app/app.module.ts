import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent,QuestionDialog } from './components/survey/survey.component';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';

import { ProjAnalyticsComponent } from './components/proj-analytics/proj-analytics.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

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
    LoginComponent,
    SignupComponent,
    QuestionDialog,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
