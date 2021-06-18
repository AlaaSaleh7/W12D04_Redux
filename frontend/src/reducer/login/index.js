const  initialState = {
    token: "",
  };

const setToken = ()=>{
    return {
        type: "SET_TOKEN",
        payload: token,
      }
}


  const login =(state=initialState,{type,payload})=>{
    switch (type) {
        case "SET_TOKEN":
          return payload;
        default:
          return state;
      }
  }