import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const updateSearchStringAction = (searchString) => ({
  type: UPDATE_SEARCHSTRING,
  payload: searchString,
});

const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';

const searchingString = '';
const addColumnAction = (column) => ({
  type: ADD_COLUMN,
  payload: column,
});

const addCardAction = (card) => ({
  type: ADD_CARD,
  payload: card,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { addColumnAction, addCardAction };
export default store;