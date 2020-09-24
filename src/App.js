import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from "./components/TopBar";
import rootReducer from "./store/reducers"
import {createStore} from "redux";
import {Provider} from "react-redux"

const store = createStore(rootReducer)

function App() {
    return (
        <Provider store={store}>
            <div>
                <TopBar/>
            </div>
        </Provider>
    );
}

export default App;
