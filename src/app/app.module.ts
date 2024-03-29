import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthUserComponent } from './core/components/auth-user/auth-user.component';
import { GridChargeStationComponent } from './core/components/grid-charge-station/grid-charge-station.component';
import { ChargeStationDetailComponent } from './core/components/charge-station-detail/charge-station-detail.component';
import { StationCardComponent } from './core/components/ui/station-card/station-card.component';
import { UserAccountDetailsComponent } from './core/components/user-account-details/user-account-details.component';
import { UserAccountCardComponent } from './core/components/ui/user-account-card/user-account-card.component';
import { StatusAlertComponent } from './core/components/ui/status-alert/status-alert.component';
import { AdminChargeStationComponent } from './core/components/admin/admin-charge-station/admin-charge-station.component';
import { ChargeStationFormComponent } from './core/components/admin/charge-station-form/charge-station-form.component';
import { AuthInterceptor } from './core/interceptors/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthUserComponent, 
    GridChargeStationComponent,
    ChargeStationDetailComponent,
    StationCardComponent,
     UserAccountCardComponent,
    UserAccountDetailsComponent,
    StatusAlertComponent,
    AdminChargeStationComponent,
    ChargeStationFormComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
