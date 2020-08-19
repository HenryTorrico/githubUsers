import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {API_ENDPOINT} from '../../global'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RepoModel } from '../domain/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GetReposOfUserUseCase implements UseCase<void, RepoModel> {
  elephantRepository: any;

  constructor(private http: HttpClient) { }
  execute(params: void): Observable<RepoModel> {
    throw new Error("Method not implemented.");
  }

  getAllReposOfUser(username): Observable<any> {
    return this.http.get(API_ENDPOINT+'users/'+username+'/repos').pipe(
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