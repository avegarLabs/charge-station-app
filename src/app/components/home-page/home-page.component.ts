import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

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
    private authService: AuthService,
    private tokenService: TokenService
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

  closeSession(){
    this.tokenService.logOuth();
    this.ngOnInit();
  }


  goToProfile(){
    this.route.navigate(['user', this.user.moniker]);
  }

}
