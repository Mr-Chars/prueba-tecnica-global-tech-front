import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../contants/generals';
import { EMPLOYEE, RESPONSE_SEARCH_PRODUCT_BY_ID } from '../interfaces/generals.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getEmployee(configToSearch: any) {
    const params = new HttpParams()
      .set('where', configToSearch.where)
      .set('pagination_itemQuantity', configToSearch.pagination_itemQuantity)
      .set('pagination_step', configToSearch.pagination_step);
    return this.http.get<any>(`${URLS.main_employee}`, { params: params });
  }

  add(body: EMPLOYEE) {
    return this.http.post(`${URLS.main_employee}`, body);
  }

  update(body: EMPLOYEE) {
    return this.http.put(`${URLS.main_employee}`, body);
  }

  delete(idProduct: string) {
    const body = { id: idProduct };
    return this.http.delete(`${URLS.main_employee}`, { body });
  }
}
