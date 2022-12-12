import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  getListDepartments(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departments`)
  }

  postDepartments(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/departments`, data);
  }

  getOneDepartment(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departments/${id}`)
  }
}
