import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_ENDPOINT} from '../global';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(protected http: HttpClient) { }

  getRepositories(username) {
    return this.http.get(API_ENDPOINT+'users/'+username+'/repos');
  }
}
