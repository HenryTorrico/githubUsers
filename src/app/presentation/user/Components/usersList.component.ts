import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: '../Views/usersList.component.html',
  styles: ['.page-item{opacity: 0e;}.page-item:nth-child(1){opacity: 0;}.page-item:last-child{opacity: 0;}']
})

export class UserListComponent implements OnInit {
  page = 1;
  horizontal = true;
  pageSize = 4;
  title = 'GithubUsers';
  users: any[] = [];
  constructor(protected userService: UserService,private router: Router) {}
  routeWithData(userId){
    this.router.navigate(['/userRepos', userId]);
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
