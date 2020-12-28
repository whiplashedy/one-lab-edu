import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: Observable<firebase.User | null>;
  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  register(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.signOut();
  }
}
