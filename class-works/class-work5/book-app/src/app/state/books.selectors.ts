/*createSelector - do memorization, last track inputs to selectors,
so if they are the same as curr,
selector return the last result instead of computing once again
*/
// https://xsltdev.ru/angular/ngrx/selectors/#createfeatureselector

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../book-list/books.model';

export const selectBooks = createSelector(
    (state: AppState) => state.books,
    (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector <
    AppState,
    ReadonlyArray<string>
    // tslint:disable-next-line:quotemark
    >("collection");


export const selectBookCollection = createSelector(
        selectBooks,
        selectCollectionState,
        (books: Array<Book>, collection: Array<string>) =>
        { collection.map( (id) => books.find( (book) => book.id === id )); }
        /* get books array, collection array
        and returns statement: collection:  mapped id with book ?
        */
    );
