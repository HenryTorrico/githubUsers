import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserModel} from '../app/core/domain/user.model';

import {UserListComponent} from './presentation/user/usersList.component';

const routes: Routes = [

  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'User List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
