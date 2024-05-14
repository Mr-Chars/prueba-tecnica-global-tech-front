import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  wordSearched = '';

  employees = [];
  constructor(
    public readonly employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.searchEmployee();
  }

  async searchEmployee(pagination_step = 1) {
    const dataToRequest = {
      where: '',
      pagination_itemQuantity: 10,
      pagination_step,
    };
    try {
      const response = await firstValueFrom(this.employeeService.getEmployee(dataToRequest));
      console.log(response);
      // this.employees =

      // this.searchProduct();
    } catch (error) {
      console.log(error);
      // this.products = [];
    }
  }

  add() {

  }
}
