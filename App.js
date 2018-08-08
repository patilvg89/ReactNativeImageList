import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./app/reducers";
import { AppNavigator } from "./app/components/AppNavigator";

const store = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
