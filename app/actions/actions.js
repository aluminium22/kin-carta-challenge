import reducers from '../state/reducers';

export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_LOADING = 'UPDATE_LOADING';
export const UPDATE_FAVORITE_TOGGLE = 'UPDATE_FAVORITE_TOGGLE';

// export const updateContacts = () => {
//   fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
//     .then((response) => response.json())
//     .then((responseJson) => ({
//       type: UPDATE_CONTACTS,
//       responseJson,
//     }));
// };

const sortAlphabetic = (data) => {
  const sorted = [...data].sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return sorted;
};
const sortFavorites = (data) => {
  const favorite = data.filter((contact) => contact.isFavorite);
  const contacts = data.filter((contact) => !contact.isFavorite);
  const sorted = [
    { title: 'FAVORITE CONTACTS', data: favorite },
    { title: 'OTHER CONTACTS', data: contacts },
  ];
  return sorted;
};

export const updateContacts = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'
    );
    let responseData = await response.json();
    responseData = sortAlphabetic(responseData);
    const data = sortFavorites(responseData);
    dispatch({ type: UPDATE_CONTACTS, data });
  };
};
export const updateFavorites = (favorites) => {
  {
    type: UPDATE_FAVORITES, favorites;
  }
};
export const updateLoading = (loading) => {
  {
    type: UPDATE_LOADING, loading;
  }
};
export const updateContact = (contact) => (dispatch) => {
  dispatch({
    type: UPDATE_CONTACT,
    contact,
  });
};

const swapOutContacts = (contact, contacts) => {
  const resultContacts = [...contacts[0].data, ...contacts[1].data];
  const adjustedArray = resultContacts.filter((con) => con.id !== contact.id);
  return sortFavorites(sortAlphabetic(adjustedArray.concat(contact)));
};

export const updateFavoriteToggle =
  (value, contact, contacts) => (dispatch) => {
    //SHOULD really be a call to update the value in the API - front-end doing logic here is discouraged.
    const data = swapOutContacts(contact, contacts);
    dispatch({ type: UPDATE_CONTACTS, data });
    dispatch({
      type: UPDATE_FAVORITE_TOGGLE,
      value,
    });
  };
