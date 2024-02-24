import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthUserComponent } from './core/components/auth-user/auth-user.component';
import { GridChargeStationComponent } from './core/components/grid-charge-station/grid-charge-station.component';
import { ChargeStationDetailComponent } from './core/components/charge-station-detail/charge-station-detail.component';
import { RegisterConfirmComponent } from './core/components/register-confirm/register-confirm.component';
import { UserAccountDetailsComponent } from './core/components/user-account-details/user-account-details.component';
import { AdminChargeStationComponent } from './core/components/admin/admin-charge-station/admin-charge-station.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'auth',
    component: AuthUserComponent
  },
  {
    path:'stations',
    component: GridChargeStationComponent
  },
  {
    path:'station/:moniker',
    component: ChargeStationDetailComponent
  },
  {
    path:'auth-confirm',
    component: RegisterConfirmComponent
  },
  {
    path:'user/:moniker',
    component: UserAccountDetailsComponent
  },
  {
    path:'management-stations',
    component: AdminChargeStationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
