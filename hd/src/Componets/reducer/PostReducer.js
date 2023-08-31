const initialState = {
    data : []
}

export default (state = initialState, { type, payload }) => {
    console.log(payload,"jjj");
   
  switch (type) {

  case 'GET_DATA':

       state.data.push(payload);
       console.log(state.data,"hhhh")
    return { ...state};

  default:
    return state
  }
}
