import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListComponent } from './list/list.component';
import { DepartmentService } from '../../services/department.service';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GestionDepartmentComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    GestionDepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DepartmentService
  ] 
})
export class GestionDepartmentModule { }
