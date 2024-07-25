import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private API_USERS = "http://localhost:8080/users/"

  constructor(
    // private http: HttpClient
    ) {} 

  personal:any[] = [
    {
      id: 1,
      name: 'Hugo',
      age: 33,
      email: 'hugo@gmail.com'
    },
    {
      id: 2,
      name: 'Paco',
      age: 18,
      email: 'paco@gmail.com'
    },
    {
      id: 3,
      name: 'Luis',
      age: 24,
      email: 'luis@gmail.com'
    },
    {
      id: 4,
      name: 'Grecia',
      age: 29,
      email: 'gracia@gmail.com'
    },
    {
      id: 5,
      name: 'Sofia',
      age: 25,
      email: 'sofia@gmail.com'
    }

  ]

  /**
   * getAllUsers
  public getAllUsers(): Observable<any> {
    return this.http.get(this.API_USERS, {responseType: 'text'})
  }
  */
  gerPersonal() {
    return this.personal;
  }
  getPersonalDetail(i:any) {
    return this.personal.find(user => user.id == i);
  }
  
}
