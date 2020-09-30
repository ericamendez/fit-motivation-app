import { combineReducers } from "redux"

const initState = {}

const reducer = (state: any = initState, action: any) => {
  switch(action.type){
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  app: reducer
})