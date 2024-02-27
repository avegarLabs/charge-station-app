import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user!:UserListItem;
  isAdmin:boolean = false;

  constructor(
    private route:Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.checkUser();    
  }

  checkUser() {
    return this.authService.getActiveUser().subscribe((data:UserListItem) => {
        this.user = data;
        this.isAdmin = this.user.roleList.find((rol:string) => rol.includes("ROLE_ADMIN")) ? true : false; 
    });
  }
  

  goToAuth(){
    this.route.navigate(['auth']);
  }

}
