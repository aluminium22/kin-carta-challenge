import { combineReducers } from 'redux';
import {
  UPDATE_CONTACTS,
  UPDATE_FAVORITES,
  UPDATE_CONTACT,
  UPDATE_LOADING,
  UPDATE_FAVORITE_TOGGLE,
} from '../actions/actions';

const initialState = {
  contacts: [],
  favoriteContacts: [],
  contact: {},
  loading: false,
};

const setFavorite = (state, action) => {
  return {
    ...state.contact,
    isFavorite: action.value,
  };
};

const appData = (appData = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return {
        ...appData,
        contacts: action.data,
      };
    case UPDATE_FAVORITES:
      return {
        ...appData,
        favoriteContacts: action.favorites,
      };
    case UPDATE_CONTACT:
      return {
        ...appData,
        contact: action.contact,
      };
    case UPDATE_LOADING:
      return {
        ...appData,
        loading: action.loading,
      };
    case UPDATE_FAVORITE_TOGGLE:
      return {
        ...appData,
        contact: setFavorite(appData, action),
      };
    default:
      return appData;
  }
};

export default combineReducers({ appData });
