import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.css'],
})
export class RegisterConfirmComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.route.navigate(['auth']);
  }
}
