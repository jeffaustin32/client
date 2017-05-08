import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule, Route } from '@angular/router';
import { DataTableModule } from "angular2-datatable";

// Components
import { HomeComponent } from './home.component';
import { PrivateComponent } from './private/private.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

// Services
import { AuthService } from '../shared/services/auth.service';
import { ResourceService } from '../shared/services/resource.service';

export const HomeRoutes: Route[] = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    PrivateComponent,
    ResourceDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTableModule
  ],
  providers: [
    AuthService,
    ResourceService
  ],
  entryComponents: [
    ResourceDetailComponent
  ]
})
export class HomeModule { }
