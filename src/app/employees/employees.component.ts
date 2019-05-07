import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'underscore';
import { PagerService } from '../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private httpClient: HttpClient, private pagerService: PagerService, private router: Router) { }

  // array of all items to be paged
  private employees: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.getEmployees();
  }

  goToEmployeeDetails(id) {
    this.router.navigate(['employee-details', id]);
  }

  getEmployees(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res : any[])=>{
      console.log(res);
      this.employees = res;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.employees.length, page);

    // get current page of items
    this.pagedItems = this.employees.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}
