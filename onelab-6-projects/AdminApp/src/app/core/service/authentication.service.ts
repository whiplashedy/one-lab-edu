import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  register = (email: string, password: string) => this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  login = (email: string, password: string) => this.firebaseAuth.signInWithEmailAndPassword(email, password);
  logout = () => this.firebaseAuth.signOut();
  get user$(): Observable<User | null> {
    return this.firebaseAuth.user;
  }
}
