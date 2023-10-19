import { createStore, Reducer } from "redux";

// 상태의 타입 정의
interface AppState {
  number: number;
}

// 액션의 타입 정의
interface IncrementAction {
  type: "INCREMENT";
  size: number;
}

// 액션 객체에 대한 유니온 타입 정의
type AppAction = IncrementAction;

// 초기 상태 정의
const initialState: AppState = { number: 0 };

// 리듀서 함수 정의
const reducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state, action);
      return { ...state, number: state.number + action.size };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
