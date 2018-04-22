import { ASSG } from "../../../constants/namespace";
import * as services from "../services/assg";
export default {
  namespace: ASSG,

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // dispatch({ type: "getUser", payload: { id: '450000201602294662' } });
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: "updateState" });
    },
    *getUser({ payload }, { call, put }) {
      const data = yield call(services.fetchUser, payload.id);
      console.log(data)
    }
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
