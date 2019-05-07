import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoInicial() {
    this.router.navigate([''])
  }

  gotoEmployees() {
    this.router.navigate(['employees']);
  }

  gotoEmployeeCreate() {
    this.router.navigate(['employee-create']);
  }

}
