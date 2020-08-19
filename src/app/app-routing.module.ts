import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserModel} from '../app/core/domain/user.model';

import {UserListComponent} from './presentation/user/usersList.component';
import { UserReposComponent } from './presentation/user/userRepos.component';

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
    path: 'user/repo/:username', 
    component: UserReposComponent,
    data: { title: 'User Repos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
