import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private router: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.deleteEmployee();
  }

  mensagem;

  deleteEmployee(){
    let id = this.router.snapshot.params.id;
    this.httpClient.delete('http://dummy.restapiexample.com/api/v1/delete/'+id).subscribe((res)=>{
      console.log(res);
      this.mensagem = "Employee deletado.";
    });
  }

}
