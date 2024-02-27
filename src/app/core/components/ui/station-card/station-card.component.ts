import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserListItem } from 'src/app/core/interfaces/userInterface';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css'],
})
export class StationCardComponent implements OnInit {
  @Input() station: any;
  srcBase: string = 'assets/images/stations/';
  activeUser!: UserListItem;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.checkActiveUser();
  }

  checkActiveUser() {
    return this.authService.getActiveUser().subscribe((user: UserListItem) => {
      this.activeUser = user;
    });
  }

  imgSrc(moniker: string) {
    return this.srcBase + moniker + '.jpg';
  }

  goToDetail(moniker: string) {
    if (this.activeUser !== undefined) {
      this.router.navigate(['detail', moniker]);
    } else {
      this.router.navigate(['auth']);
    }
  }
}
