import { Component,OnInit } from '@angular/core';
import { UserModel } from '../../core/domain/user.model';
import { GetAllUsersUseCase } from '../../core/usecases/getAllUsers';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './usersList.component.html',
  styleUrls: []
})

export class UserListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  title = 'GithubUsers';
  users: any[] = [];
  constructor(
    protected restService: RestService
  ) {
  }
  ngOnInit() {
    this.restService.getUsers()
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