import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { User } from "../user-add/user.model";

const httpOptions = {
   headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 25c7aebdc0a98934f48be061ab46a2771b942d6d2d1ea04ed1ed607e1127d2da'
   })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://gorest.co.in/public/v2/users';

  constructor(private http: HttpClient) { }

     // POST - add a new user
     addUser(user: User): Observable<User> {
      return this.http.post<User>(this.userUrl, user, httpOptions)
         .pipe(
            catchError(this.handleError)
         );
   }

     // POST - add a new user
     updateUser(user: User): Observable<User> {
      return this.http.patch<User>(this.userUrl+"/"+user.id, user, httpOptions)
         .pipe(
            catchError(this.handleError)
         );
   }

   // POST - add a new user
   deleteUser(id:number): Observable<User> {

    return this.http.delete<User>(this.userUrl+'/'+Number(id),httpOptions)
    .pipe(
       catchError(this.handleError)
    )

   
   }
    // POST - add a new user
   getUser(id:number): Observable<User> {

    return this.http.get<User>(this.userUrl+'/'+Number(id))
    .pipe(
       catchError(this.handleError)
    )

   
   }
   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred.
       console.error('An error occurred:', error.error.message);
    } else {
       // Server error
       console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    return throwError(
       'Something bad happened; please try again later.');
 }
}
