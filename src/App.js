import logo from './logo.svg';
import './App.css';

import Assignment6 from './labs/a6';
//import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./tuiter/HomeScreen/Home";


import A7Practice from "./components/a7/Practice";
import A7Build from "./components/a7/Build";
import A7Home from "./components/a7/Build/HomeScreen/Home";
import A7Explore from "./components/a7/Build/ExploreScreen/Explore";
import A7ProfileScreen from "./components/a7/Build/ProfileScreen";
import A7EditProfileScreen from "./components/a7/Build/EditProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";


import HelloWorld from "./a6/HelloWorld";
import A6BuildExplore from './a6/Build/ExploreScreen/Explore';
import A6Practice from './a6/Practice';

import Assignment7 from './labs/a7';
//import A6HelloWorld from './a6/HelloWorld';

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
 return (
       <Provider store={store}>

 <BrowserRouter>
   <div className="container">
   <Routes>
        <Route path="/" element={<A6Practice/>}/>
        <Route path="/hello" element={<HelloWorld/>}/>
        <Route path="/tuiter/home" element={<A7Home/>}/>
        <Route path="/tuiter/*" element={<Tuiter/>}/>

        <Route path="/a7" element={<Assignment7/>}/>
        <Route path="/a8" element={<A7Home/>}/>
        <Route path="/a9" element={<Home/>}/>




    </Routes>
   </div>
    </BrowserRouter>
          </Provider>

 );
}
export default App;

