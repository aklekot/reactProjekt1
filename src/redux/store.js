import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';

const addColumnAction = (column) => ({
  type: ADD_COLUMN,
  payload: column,
});

const addCardAction = (card) => ({
  type: ADD_CARD,
  payload: card,
});

const reducer = (state, action) => {
  if (action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
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