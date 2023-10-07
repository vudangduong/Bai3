const initialState = [
      { id: 1, text: 'Dương 1'},
      { id: 2, text: 'Dương 2'},
      { id: 3, text: 'Dương 3' }
    ]
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'todos/todoAdded': {
        return [
          ...state,
          {
            id: action.payload.id,
            text: action.payload.text,
          }
        ]
      }
      case 'todos/todoDeleted': {
        return state.filter(todo => todo.id !== action.payload)
      }
      default:
        return state
    }
  }