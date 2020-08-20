import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {API_ENDPOINT} from '../global';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(protected http: HttpClient) { }

  getRepositories(userId) {
    return this.http.get(API_ENDPOINT+'users/'+userId+'/repos');
  }
  getUser(userId){
    return this.http.get(API_ENDPOINT+'users/'+userId);
  }
}
