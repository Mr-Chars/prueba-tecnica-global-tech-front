import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EMPLOYEE } from '../../interfaces/generals.interface';
import { COLORS, MESSAGES, OPTIONS_FILTER, RANDOMS, ROUTES } from '../../contants/generals';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  wordToFind = '';
  filterBy = 'first_name';

  optionsFilter = OPTIONS_FILTER;

  employees: Array<EMPLOYEE> = [];
  constructor(
    public readonly employeeService: EmployeeService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.searchEmployee();
  }

  async searchEmployee(pagination_step = 1) {
    const dataToRequest = {
      where: JSON.stringify([
        ['employees.' + this.filterBy, 'like', '%' + this.wordToFind + '%',]
      ]),
      pagination_itemQuantity: 10,
      pagination_step,
    };
    try {
      const response = await firstValueFrom(this.employeeService.getEmployee(dataToRequest));
      this.employees = response.employees.data;
    } catch (error) {
      console.log(error);
      this.employees = [];
    }
  }

  add() {
    this.router.navigate([`/${ROUTES.manageEmployee}/`]);
  }

  update(id: string) {
    this.router.navigate([`/${ROUTES.manageEmployee}/${id}`]);
  }

  async delete(id: string) {
    swal.fire({
      title: ' ',
      text: `${MESSAGES.deletingEmployee}`,
      showCancelButton: true,
      confirmButtonColor: COLORS.yellow_1,
      cancelButtonColor: COLORS.gray_1,
      confirmButtonText: RANDOMS.confirm
    }).then(async (result) => {

      if (result.value) {
        try {
          await firstValueFrom(this.employeeService.delete(id));
        } catch (error) {
        } finally {
          this.wordToFind = '';
          this.searchEmployee();
        }
      }
    });
  }
}
