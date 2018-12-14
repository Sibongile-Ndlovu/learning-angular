import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
//import { Observable, observable, from } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';


 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
                      catchError(this.errorHandler));
          
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error")
  } 
// Services
  // getEmployees() {
  //   return [
  //     {"id": 1, "name": "Andrew", "age": 30},
  //     {"id": 2, "name": "Brandon", "age": 25},
  //     {"id": 3, "name": "Christina", "age": 26},
  //     {"id": 4, "name": "Elena", "age": 28},
  //   ]
  // }

 }
