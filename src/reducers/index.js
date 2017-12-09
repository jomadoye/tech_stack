import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectorReducer from './SelectorReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectorReducer,
});
