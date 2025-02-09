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
	public isVisibleLoginForm = signal<boolean>(false)
	
  constructor(private http: HttpClient) { }
  get isVisibleLoginForm$() {
	return this.isVisibleLoginForm.asReadonly()
  }

  isAuthenticated(): boolean {
	const token = localStorage.getItem('jwt_token');
	return !!token
  }
  login(email: string, password: string): Observable<AuthModel> {
	const data = { email, password }
	return this.http.post<AuthModel>(`${this.apiUrl}/auth/login`, data)
  }
  logOut() {
	localStorage.clear();
  }
  setFormVisible() {
	this.isVisibleLoginForm.set(true)
  }
  setFormNotVisible() {
	this.isVisibleLoginForm.set(false)
  }
}
