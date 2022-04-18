import Message from './Message'
import {store} from './Store'
import {Provider} from 'react-redux'

let App =()=>{
  return <>
  <Provider store={store}>
  <h1>App Component</h1>
  <hr/>
  <Message/>
  </Provider>
  </>
}

export default App