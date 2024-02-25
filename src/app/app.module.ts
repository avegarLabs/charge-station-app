import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthUserComponent } from './core/components/auth-user/auth-user.component';
import { GridChargeStationComponent } from './core/components/grid-charge-station/grid-charge-station.component';
import { ChargeStationDetailComponent } from './core/components/charge-station-detail/charge-station-detail.component';
import { StationCardComponent } from './core/components/ui/station-card/station-card.component';
import { StatusAlertComponent } from './core/components/ui/status-alert/status-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthUserComponent, 
    GridChargeStationComponent,
    ChargeStationDetailComponent,
    StationCardComponent,
    StatusAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatDialogModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
