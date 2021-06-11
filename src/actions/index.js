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
