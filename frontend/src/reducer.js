function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return {
          username: action.username,
          access_token: action.access_token,
          };          
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return null;
      default:
        return state;
    }
  }
  
  function todoReducer(state, action) {
    switch (action.type) {
      case "CREATE_TODO":
        const newTodo = {
          title: action.title,
          content: action.content,
          author: action.author,
          dispatch: action.dispatch,
          id: action.id,
          time: action.timeNow,
        };
        return [newTodo, ...state];
      case "FETCH_TODO":
          return action.todos;
      case "TOGGLE_TODO":
        //state.setComplete(true);
        if(!action.complete){
          document.getElementById(action.title).innerHTML="Completed on: "+new Date(Date.now()).toString();
        }
        else{
          document.getElementById(action.title).innerHTML="";
        }
        return state;
      case "DELETE_TODO":

        const index = state.map(t => t.title).indexOf(action.title);
        const stateTemp = [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
        return stateTemp;
      case "CLEAR_TODO":
          return [];
        
      default:
        return state;
    }
  }
  
  export default function appReducer(state, action) {
    return {
      user: userReducer(state.user, action),
      todos: todoReducer(state.todos, action),
    };
  }