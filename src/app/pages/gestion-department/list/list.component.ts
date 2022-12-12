import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public departments: any[] = [];

  constructor(private depService: DepartmentService) { }

  ngOnInit(): void {
  this.loadListDepartments();
  }

 loadListDepartments(): void {
    this.depService.getListDepartments().subscribe(data =>{
      this.departments.push(...data);
    }, err=> console.log(err));
  }

}
