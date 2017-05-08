import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private userEmail: string;

  constructor() { }

  public isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  public login(): Observable<boolean> {
    return Observable.create((subscriber) => {
      setTimeout(() => {
        this.loggedIn.next(true);
        this.userEmail = 'test@test.com';
        subscriber.next(true);
        subscriber.complete();
      }, 1000);
    });
  }

  public logout() {
    this.loggedIn.next(false);
    this.userEmail = null;
  }

  public getUserEmail() {
    return this.userEmail;
  }
}
