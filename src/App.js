import Products from './components/Products';
import Cart from './components/Cart';
import { PRODUCTS_LIST } from "./store/reducer";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {reducer} from './store/reducer.js'
function App() {


  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )
  return (
    <Provider store={store}>
      <div className="App">
        <Products products={PRODUCTS_LIST} > </Products>
        <Cart products={PRODUCTS_LIST} ></Cart>
      </div>
    </Provider>
    
  );
}

export default App;
