import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthModel } from '../models/authModel.models';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private apiUrl = environment.BASE_URL
	private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
	public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }
  isAuthenticated(): boolean {
	const token = window.localStorage.getItem('jwt_token');
	return !!token
  }
  login(email: string, password: string): Observable<AuthModel> {
	const data = { email, password }
	return this.http.post<AuthModel>(`${this.apiUrl}/auth/login`, data)
  }
}
