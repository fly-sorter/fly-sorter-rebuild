//This is the only starting form of the reducer, feel free to modularize this file

const initialState = {
  parts: [],
  subAssembly: [],
  users: []
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETPARTS':
      return { ...state, ...{ parts: payload } };

    case 'GETSUBASSEMBLY':
      return { ...state, ...{ subAssembly: payload } };

    case 'GETUSERLIST':
      return { ...state, ...{ users: payload } };

    default:
      return state;
  }
};
