import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MESSAGES, OPTIONS_AREA, OPTIONS_COUNTRY_EMPLOYEERS, OPTIONS_TYPE_IDENTIFICATION, REGEXS_CODES, ROUTES } from '../../contants/generals';
import { firstValueFrom } from 'rxjs';
import { EMPLOYEE, RESPONSE_PRODUCT_NOT_PAGINATION } from '../../interfaces/generals.interface';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent {
  idEmployee!: string;
  isIdProductValid = true;
  lastDateRelease = new Date().toISOString().split('T')[0];

  countriesEmployeers = OPTIONS_COUNTRY_EMPLOYEERS;
  type_identification = OPTIONS_TYPE_IDENTIFICATION;
  areas = OPTIONS_AREA;

  employeeForm = new FormGroup({
    lastname: new FormControl('', [Validators.required, Validators.pattern(REGEXS_CODES.name)]),
    second_lastname: new FormControl('', [Validators.required, Validators.pattern(REGEXS_CODES.name)]),
    first_name: new FormControl('', [Validators.required, Validators.pattern(REGEXS_CODES.name)]),
    other_names: new FormControl('', [Validators.required, Validators.pattern(REGEXS_CODES.name)]),

    country_employment: new FormControl('', [Validators.required]),
    type_identification: new FormControl('', [Validators.required]),
    code_identification: new FormControl('', [Validators.required]),
    date_admission: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
  });

  constructor(
    public readonly employeeService: EmployeeService,
    public readonly activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.idEmployee = params.id;
        console.log(this.idEmployee);

      }
    });
  }

  ngOnInit(): void {
    if (this.idEmployee) {
      this.searchEmployee();
    } else {
      // const aYearFrom = new Date();
      // aYearFrom.setFullYear(aYearFrom.getFullYear() + 1);
      // this.productForm.controls['date_revision'].setValue(aYearFrom.toISOString().split('T')[0]);
    }
  }

  checkDateAdmission() {

  }

  async save() {
    const PRODUCT: EMPLOYEE = {
      id: this.idEmployee,
      area: this.employeeForm?.value?.area!,
      code_identification: this.employeeForm?.value?.code_identification!,
      country_employment: this.employeeForm?.value?.country_employment!,
      date_admission: this.employeeForm?.value?.date_admission!,
      first_name: this.employeeForm?.value?.first_name!,
      lastname: this.employeeForm?.value?.lastname!,
      other_names: this.employeeForm?.value?.other_names!,
      second_lastname: this.employeeForm?.value?.second_lastname!,
      type_identification: this.employeeForm?.value?.type_identification!,
    };
    console.log(PRODUCT);

    try {
      // this.resetForm();
      if (this.idEmployee) {
        await firstValueFrom(this.employeeService.update(PRODUCT));
      } else {
        await firstValueFrom(this.employeeService.add(PRODUCT));
      }
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: MESSAGES.successSaveEmployee,
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.router.navigate([`/${ROUTES.employees}`]);
      }, 1600);
    } catch (error) {

    }
  }

  async searchEmployee() {
    const dataToRequest = {
      where: JSON.stringify([
        ['employees.id', '=', this.idEmployee,]
      ]),
      pagination_itemQuantity: 0,
      pagination_step: 0,
    };
    try {
      const response: RESPONSE_PRODUCT_NOT_PAGINATION = await firstValueFrom(this.employeeService.getEmployee(dataToRequest));
      if (response.status) {
        const employee = response.employees[0];
        console.log(employee.date_admission);
        this.employeeForm.controls['lastname'].setValue(employee.lastname!);
        this.employeeForm.controls['second_lastname'].setValue(employee.second_lastname!);
        this.employeeForm.controls['first_name'].setValue(employee.first_name!);
        this.employeeForm.controls['other_names'].setValue(employee.other_names!);
        this.employeeForm.controls['country_employment'].setValue(employee.country_employment!);
        this.employeeForm.controls['type_identification'].setValue(employee.type_identification!);
        this.employeeForm.controls['code_identification'].setValue(employee.code_identification!);
        this.employeeForm.controls['date_admission'].setValue(employee.date_admission!);
        this.employeeForm.controls['area'].setValue(employee.area!);
      }

      // this.employees = response.employees.data;
    } catch (error) {
      console.log(error);
      // this.employees = [];
    }
  }

}
