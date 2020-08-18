import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {API_ENDPOINT} from '../../global'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUseCase implements UseCase<void, UserModel> {
  elephantRepository: any;

  constructor(private http: HttpClient) { }
  execute(params: void): Observable<UserModel> {
    throw new Error("Method not implemented.");
  }

  getAllUsers(): Observable<any> {
    return this.http.get(API_ENDPOINT + 'users').pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  
    extractData(extractData: any): import("rxjs").OperatorFunction<Object, unknown> {
        throw new Error("Method not implemented.");
    }
    handleError(handleError: any): import("rxjs").OperatorFunction<unknown, any> {
        throw new Error("Method not implemented.");
    }
}