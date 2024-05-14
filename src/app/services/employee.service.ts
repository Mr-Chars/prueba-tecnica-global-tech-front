import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../contants/generals';
import { RESPONSE_SEARCH_PRODUCT_BY_ID } from '../interfaces/generals.interface';

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
    return this.http.get<RESPONSE_SEARCH_PRODUCT_BY_ID>(`${URLS.main_employee}`, { params: params });
  }
}
