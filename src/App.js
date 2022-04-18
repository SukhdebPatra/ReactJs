
import './App.css';
import { Store } from './REDUX/Store';
import Counter from './Counter';
import { Provider } from 'react-redux'
function App() {
  return <div>
     <Provider Store={Store}>
    <h1>App component</h1>
    <hr/>
    <Counter/>
    </Provider>
  </div>
  
}

export default App;
