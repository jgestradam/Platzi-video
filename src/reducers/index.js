
const reducer = (state, action) => {
  switch (action.type) { // Vamos a validar el type que habimaos mencionado que es como la descripción del action
    case 'SET_FAVORITE':
      return {
        ...state, // Desestructuramos la variable state
        myList: [...state.myList, action.payload], // Asignamos nuevos valores a mylist que fueron los que se trajeron del action. Si no desestructuramos la myList se sobrescribiran y no se añadiran nuevos favoritos
      };
    default: // Caso por defecto si no cumple el action con ninguno
      return state;
  }
};
export default reducer;
