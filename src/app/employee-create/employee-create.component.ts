import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  formCadastro;
  valoresForm: Object;
  conversao;
  mensagem;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
    this.formCadastro.valueChanges.pipe()
      .subscribe(res => {
        this.valoresForm = res;
      }
    );
  }

  cadastro(){
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    this.httpClient.post("http://dummy.restapiexample.com/api/v1/create", this.conversao).subscribe(
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
