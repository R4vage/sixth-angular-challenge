import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { UserFormModule } from './user-form/user-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    VehiclesModule,
    UserFormModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
