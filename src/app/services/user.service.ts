import { Injectable } from '@angular/core';
import {API_ENDPOINT} from '../global';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(protected http: HttpClient) { }

  getUsers() {
    return this.http.get(API_ENDPOINT+'users');
  }
  
  
}

