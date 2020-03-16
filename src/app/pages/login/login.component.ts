import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  exibir: Boolean;

  constructor(private router: Router) {
    this.exibir = true;
   }

  ngOnInit() {
  }

  login(){
    this.exibir = false;
    this.router.navigate(['agendamento']);    
  }

  registro(){
    this.exibir = false;
    this.router.navigate(['registro'])
  }

  
  
}
