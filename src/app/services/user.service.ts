import { Injectable } from '@angular/core';
import {API_ENDPOINT} from '../global';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CachedService } from './cachedService';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(protected http: CachedService) { }

  getUsers() {
    return this.http.get(API_ENDPOINT+'users',72000);
  }
  
  
}

