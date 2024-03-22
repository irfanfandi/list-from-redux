import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga";
import Routes from "./Routes";
import rootReducer from "./store/reducer/index";
import rootSaga from "./store/sagas/index";
import "./style/App.scss";

function App() {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

  // then run the saga
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="wrap">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
