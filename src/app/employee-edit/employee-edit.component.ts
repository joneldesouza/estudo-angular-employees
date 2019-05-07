import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  formEdit;
  valoresForm: Object;
  conversao;
  mensagem;
  employee;
  id = this.router.snapshot.params.id;

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployee();
    this.formEdit = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
    this.formEdit.valueChanges.pipe()
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      }
    );
  }

  getEmployee(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employee/'+this.id).subscribe((res : any[])=>{
      console.log(res);
      this.employee = res;
    });
  }

  edit(){
    console.log(this.valoresForm);
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    this.httpClient.put("http://dummy.restapiexample.com/api/v1/update/"+this.id, this.conversao).subscribe(
      data => { 
        console.log("POST Request is successful ", data);
        this.mensagem = "Cadastro efetuado com sucesso.";
      },
      error => { 
        console.log("Error", error);
        this.mensagem = "Ocorreu algum erro. Tente novamente.";
      }
    );
  }

}
