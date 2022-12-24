import {
  CombinedState,
  configureStore,
  getDefaultMiddleware,
  AnyAction,
  combineReducers,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { theme } from './modules'
import logger from 'redux-logger'
import { Reducer } from 'react'

export interface ReducerState {
  theme: theme.StateType
}

const rootReducer = (
  state: ReducerState,
  action: AnyAction,
): CombinedState<ReducerState> => {
  switch (action.type) {
    // next-redux-wrapper의 HYDRATE 액션 처리(그냥 이렇게만 해주면 된다.)
    case HYDRATE:
      return action.payload

    // 슬라이스 통합
    default: {
      const combinedReducer = combineReducers({
        theme: theme.reducer,
        // [couterSlice.name]: couterSlice.reducer,
      })
      return combinedReducer(state, action)
    }
  }
}

const makeStore = () => {
  // 미들웨어 추가 (필요 없으면 생략)
  const middleware = getDefaultMiddleware()
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
  }

  // store 생성
  const store = configureStore({
    reducer: rootReducer as any, // 리듀서
    middleware, // 미들웨어
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === 'development', // 개발자도구
  })

  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

const wrapper = createWrapper<AppStore>(makeStore)
export default wrapper
