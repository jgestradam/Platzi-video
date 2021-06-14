
const reducer = (state, action) => {
  switch (action.type) { // Vamos a validar el type que habimaos mencionado que es como la descripción del action
    case 'SET_FAVORITE':
      return {
        ...state, // Desestructuramos la variable state
        myList: [...state.myList, action.payload], // Asignamos nuevos valores a mylist que fueron los que se trajeron del action. Si no desestructuramos la myList se sobrescribiran y no se añadiran nuevos favoritos
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) || 
        state.original.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default: // Caso por defecto si no cumple el action con ninguno
      return state;
  }
};
export default reducer;
