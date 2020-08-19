import { Component,OnInit } from '@angular/core';
import { UserModel } from '../../core/domain/user.model';
import { GetAllUsersUseCase } from '../../core/usecases/getAllUsers';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Card } from "../../base/card.blueprint";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './usersList.component.html',
  styleUrls: []
})

export class UserListComponent implements OnInit {
  _router:Route;
  page = 1;
  horizontal = true;
  pageSize = 4;
  title = 'GithubUsers';
  users: any[] = [];
  constructor(protected userService: UserService) {}
  routeWithData(username){
    this._router.loadChildren(['UserReposComponent', {username:username}]);
  }
  
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data as string [];
        console.log["resultados"+data['results']];
      },
      (error) => {
        console.error(error);
      }
    );

  }
}
