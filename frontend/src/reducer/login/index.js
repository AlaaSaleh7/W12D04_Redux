const  initialState = {
    token: "",
  };


//Create a function that return an action
const setToken = ()=>{
    return {
        type: "SET_TOKEN",
        payload: token,
      }
}

//Create the reducer , on "SET-TOKEN" save the payload in the store .
  const loginReducer =(state=initialState,{type,payload})=>{
//save the payload in the store .    
    switch (type) {
        case "SET_TOKEN":
          return payload;
        default:
          return state;
      }
  }