import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../contants/generals';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getEmployee(configToSearch: any) {
    let params = new HttpParams();
    params.append("where", configToSearch.where);
    params.append("pagination_itemQuantity", configToSearch.pagination_itemQuantity);
    params.append("pagination_step", configToSearch.pagination_step);
    return this.http.get(`${URLS.main_employee}`, { params: params });
  }
}
