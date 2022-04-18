import Message from './Message'
import {store} from './Store'
import {Provider} from 'react-redux'
let App =()=>{
    return <div>
        <Provider store={store}>
        <h1>App component</h1>
        <hr/>
        <Message/>

        </Provider>
        
    </div>
}

export default App