import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getEmployee();
  }

  employee;

  getEmployee(){
    let id = this.router.snapshot.params.id;
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employee/'+id).subscribe((res : any[])=>{
      console.log(res);
      this.employee = res;
    });
  }

}
