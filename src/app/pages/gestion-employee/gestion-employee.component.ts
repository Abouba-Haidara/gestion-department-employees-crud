import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-employee',
  templateUrl: './gestion-employee.component.html',
  styleUrls: ['./gestion-employee.component.css']
})
export class GestionEmployeeComponent implements OnInit {

  public employeeShared: any;
  isUpdating: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  get = ($event: any) => {  
    this.isUpdating  = true;
    this.employeeShared = $event;
  }

}
