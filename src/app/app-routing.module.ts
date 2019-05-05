import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent  } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent  } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path:'', component:ContentComponent },
  { path:'employees', component:EmployeesComponent },
  { path:'employees/:id', component:EmployeeDetailsComponent },
  { path:'employee-create', component:EmployeeCreateComponent },
  { path:'employee-delete/:id', component:EmployeeDeleteComponent },
  { path:'employee-edit/:id', component:EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
