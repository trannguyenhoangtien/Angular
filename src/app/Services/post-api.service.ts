import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {
  private REST_API_SERVICE = 'http://localhost:3000';
  private REST_API_SERVICE_RANDOM_USER = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVICE}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getUsers(users: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVICE_RANDOM_USER}` + users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
