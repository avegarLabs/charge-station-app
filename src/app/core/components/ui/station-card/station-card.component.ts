import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { ImageNameValidationService } from 'src/app/core/services/image-name-validation.service';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css'],
})
export class StationCardComponent implements OnInit {
  @Input() station: any;
  srcBase: string = 'assets/images/stations/';
  activeUser!: UserListItem;
  imagesName!: string[];

  constructor(private router: Router, private authService: AuthService,
    private imgServices: ImageNameValidationService
    ) {}

  ngOnInit() {
    this.checkActiveUser();
    this.imagesName = this.imgServices.getFileNames();
  }

  checkActiveUser() {
    return this.authService.getActiveUser().subscribe((user: UserListItem) => {
      this.activeUser = user;
    });
  }

  imgSrc(moniker: string) {
    let image = this.checkImageMoniker(moniker);
    return this.srcBase + image + '.jpg';
  }

  goToDetail(moniker: string) {
    if (this.activeUser !== undefined) {
      this.router.navigate(['detail', moniker]);
    } else {
      this.router.navigate(['auth']);
    }
  }

  checkImageMoniker(moniker:string){
    return this.imagesName.find((item:string) => item === moniker) ? moniker : "charger_icon";
  }

   

}
