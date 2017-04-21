import * as layout from './layout.actions';

export interface State {
  // the description of the different parts of the layout go here
  openedModalName: string;
}

const initialState: State = {
  // the initial values of the layout state will be initialized here
  openedModalName: null
};

// the reducer of the layout state. Each time an action for the layout is dispatched,
// it will create a new state for the layout

export function reducer (state: initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    case layout.LayoutActionTypes.OPEN_MODAL: {
      const name = action.payload;
      return Object.assign({}, state, {
        openedModalName: name
      });
    }

    case layout.LayoutActionTypes.CLOSE_MODAL: {
      return Object.assign({}, state, {
        openedModalName: null
      });
    }

    default:
      return state;
  }
}

export const getOpenedModalName = (state: State) => state.openedModalName;
