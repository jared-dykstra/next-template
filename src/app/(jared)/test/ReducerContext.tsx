import { createContext } from 'react'
import { Action, State } from './reducer'

export type TReducerContext = {
  state: State
  dispatch: (action: Action) => void
}

export const ReducerContext = createContext<TReducerContext | null>(null)
