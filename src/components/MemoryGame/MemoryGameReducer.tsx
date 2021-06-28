// @ts-nocheck
import React, { useReducer } from 'react';

const initialState = {
  width: '6',
  height: '5',
  timer: 110,
  icon:"emoji",
  steps:0,
  match:0,
  ismatch:false,
  openTileValue:[],
  matchTileValue:[]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ismatch': return { ...state, ismatch: !state.ismatch };
    case 'match': return { ...state, match: state.match + 1 };
    case 'steps': return { ...state, steps:state.steps + 1 };
    case 'width': return { ...state, width:action.payload };
    case 'height': return { ...state, height:action.payload };
    case 'timer': return { ...state, timer:action.payload };
    case 'icon': return { ...state, icon:action.payload };
    case 'openTileValue': return { ...state, openTileValue:action.payload };
    case 'matchTileValue': return { ...state, matchTileValue:[...state.matchTileValue, action.payload] };
    default: throw new Error('Unexpected action');
  }
};
export const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value = {{ state, dispatch }}>
      { children }
    </GameContext.Provider>
  );
};
