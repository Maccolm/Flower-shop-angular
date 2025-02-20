import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
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
	
	private isVisibleLoginFormSubject = new BehaviorSubject<boolean>(false)
	public isVisibleLoginForm$ = this.isVisibleLoginFormSubject.asObservable();

	private isVisibleRegistrationFormSubject = new BehaviorSubject<boolean>(false);
	public isVisibleRegistrationForm$ = this.isVisibleRegistrationFormSubject.asObservable();

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
	const token = localStorage.getItem('jwt_token');
	return !!token
  }
  loggedIn(){
	this.isAuthenticatedSubject.next(true);
  }
  login(email: string, password: string): Observable<AuthModel> {
	const data = { email, password }
	return this.http.post<AuthModel>(`${this.apiUrl}/auth/login`, data)
  }
  logOut() {
	localStorage.clear();
	this.isAuthenticatedSubject.next(false);
  }
  setFormVisible() {
	this.isVisibleLoginFormSubject.next(true)
  }
  setFormNotVisible() {
	this.isVisibleLoginFormSubject.next(false)
  }
  set_Registration_Form_Visible() {
	this.isVisibleRegistrationFormSubject.next(true)
  }
  set_Registration_Form_Not_Visible() {
	this.isVisibleRegistrationFormSubject.next(false)
  }
  	// Метод для декодування даних з токена
	decodeToken(token: string) {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		const jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
			})
			.join('')
		)
		return JSON.parse(jsonPayload)
	}
}
