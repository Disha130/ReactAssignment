import createRootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


export const configureStore = () => {
  const store = createStore(
    createRootReducer(),
    compose(
      applyMiddleware(
        ...[
          thunk,
        ]
      )
    )
  );

  return store;
};
