export type State = {
  isIn: Record<string, boolean>
}

export type Action =
  | {
      type: 'TogglePresence'
      payload: {
        name: string
      }
    }
  | {
      type: 'Reset'
      payload?: {}
    }

export const initialState: State = {
  isIn: {},
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TogglePresence':
      return {
        ...state,
        isIn: {
          ...state.isIn,
          [action.payload.name]: !Boolean(state.isIn[action.payload.name]),
        },
      }
    case 'Reset':
      return initialState
  }
}
