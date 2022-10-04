import { UserFormComponent } from './user-form/user-form.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: "vehicles", component: VehiclesComponent},
  {path: "user-form", component: UserFormComponent},
  {path: '', redirectTo: '/vehicles', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class RoutingModule { }
