import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {UserListComponent} from './presentation/user/Components/usersList.component';
import {UserReposComponent} from './presentation/user/Components/userRepos.component';
import {RepoService} from './services/repo.service';

import {UserService} from './services/user.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxCardModule} from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbPaginationModule,
    MDBBootstrapModule.forRoot(),
		IgxCardModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
