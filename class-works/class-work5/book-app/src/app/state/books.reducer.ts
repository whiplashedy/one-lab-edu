import {createReducer, on, Action} from '@ngrx/store';

import { retrievedBookList } from './book.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = []; // read only array

export const booksReducer = createReducer(
    initialState,
    // tslint:disable-next-line:no-shadowed-variable
    on(retrievedBookList, (state, {Book}) => [...Book])
);


