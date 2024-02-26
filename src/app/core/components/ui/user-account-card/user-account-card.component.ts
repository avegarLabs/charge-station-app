import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-account-card',
  templateUrl: './user-account-card.component.html',
  styleUrls: ['./user-account-card.component.css']
})
export class UserAccountCardComponent implements OnInit {

  @Input() user:any;

  constructor(
   
    ) { }

  ngOnInit() {
    
  }

}
