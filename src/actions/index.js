/* eslint-disable import/prefer-default-export */
export const setFavorite = (payload) => ({ // Retornamos y exportamos la función un objeto
  type: 'SET_FAVORITE', // Este es el nombre/descripción que le vamos a dar a nuestro action
  payload, // El payload se le podría llamar como la acción de la UI
});

export const deleteFavorite = (payload) => (
  {
    type: 'DELETE_FAVORITE',
    payload,
  }
);

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

