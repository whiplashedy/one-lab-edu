import { setLoadingSpinner, setErrorMessage } from './shared.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';

// tslint:disable-next-line:variable-name
const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

// tslint:disable-next-line:typedef
export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
