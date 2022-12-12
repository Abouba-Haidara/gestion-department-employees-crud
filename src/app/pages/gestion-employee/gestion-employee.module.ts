import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';
import { EmployeeService } from '../../services/employee.service';
import { AddComponent } from './add/add.component';
import { DepartmentService } from '../../services/department.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ], 
  providers: [ EmployeeService, DepartmentService ]
})
export class GestionEmployeeModule { }
