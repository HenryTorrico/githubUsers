import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserListComponent} from './presentation//user/Components/usersList.component';
import { UserReposComponent } from './presentation/user/Components/userRepos.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/users', pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'User List' }
  },
  {
    path: 'userRepos/:id', 
    component: UserReposComponent,
    data: { title: 'User Repos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
