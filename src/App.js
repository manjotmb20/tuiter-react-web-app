import logo from './logo.svg';
import './App.css';

import Assignment6 from './labs/a6';
//import HelloWorld from './labs/a6/hello-world';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";



import A7Practice from "./components/a7/Practice";
import A7Build from "./tuiter";
import A7Home from "./tuiter/HomeScreen/Home";
import A7Explore from "./tuiter/ExploreScreen/Explore";
import A7ProfileScreen from "./tuiter/ProfileScreen";
import A7EditProfileScreen from "./tuiter/EditProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";


import HelloWorld from "./a6/HelloWorld";
import A6BuildExplore from './a6/Build/ExploreScreen/Explore';
import A6BuildHome from './a6/Build/HomeScreen/Home';
import A6Practice from './a6/Practice';
import A6HelloWorld from './a6/HelloWorld';

//import A6HelloWorld from './a6/HelloWorld';

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
 return (
       <Provider store={store}>

 <BrowserRouter>
   <div className="container">
   <Routes>





        <Route path="/" element={<A7Practice/>}/>
        <Route path="/a7/practice" element={<A7Practice/>}/>
        <Route path="/hello" element={<HelloWorld/>}/>
        <Route path="/a7/twitter/" element={<A7Home/>}/>
        <Route path="/a7/twitter/explore"  element={<A7Explore/>}/>
        <Route path="/a7/twitter/home" element={<A7Home/>}/>
        <Route path="/a7/twitter/profile" element={<A7ProfileScreen/>}/>
        <Route path="/a7/twitter/editprofile" element={<A7EditProfileScreen/>}/>







    </Routes>
   </div>
    </BrowserRouter>
          </Provider>

 );
}
export default App;

