import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks} from './state/books.selectors';
import {
  addBook,
  removeBook,
  retrievedBookList
} from './state/book.actions';

import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  
  onAdd(bookId){
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId){
    this.store.dispatch(removeBook({bookId}));
  }

  constructor(
    private booksService : GoogleBooksService,
    private store: Store
  ){}

  ngOnInit(){
    this.booksService
      .getBooks()
      .subscribe(
        (Book) => this.store.dispatch(retrievedBookList({Book}))
      );
  }
}

/*

/* Defined actions to express events.
Defined two reducer functions to manage different parts of the state.
Registered the global state container that is available throughout your application.
Defined the state, as well as selectors that retrieve specific parts of the state.
Created two distinct components, as well as a service that fetches from the Google Books API.
Injected the Store and Google Books API services to dispatch actions and select the current state.
*/