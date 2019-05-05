import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

import { PagerService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
