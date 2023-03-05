import logo from './logo.svg';
import './App.css';

import Assignment6 from './labs/a6';
//import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./tuiter/HomeScreen/Home";





import HelloWorld from "./a6/HelloWorld";
import A6BuildExplore from './a6/Build/ExploreScreen/Explore';
import A6BuildHome from './a6/Build/HomeScreen/Home';
import A6Practice from './a6/Practice';
//import A6HelloWorld from './a6/HelloWorld';

function App() {
 return (
 <BrowserRouter>
   <div className="container">
   <Routes>
        <Route path="/" element={<A6Practice/>}/>
        <Route path="/hello" element={<HelloWorld/>}/>
        <Route path="/tuiter/*" element={<Tuiter/>}/>
    </Routes>
   </div>
    </BrowserRouter>
 );
}
export default App;


//function App() {
//  return (
//      <BrowserRouter>
//        <div className="container">
//
//            {/*Assignment 6 routes*/}
//            <Route path="/a6/hello" exact={true}>
//                <A6HelloWorld/>
//            </Route>
//
//            <Route path="/a6/practice" exact={true}>
//                <A6Practice/>
//            </Route>
//
//            <Route path="/a6/twitter/explore" exact={true}>
//                <A6BuildExplore/>
//            </Route>
//
//            <Route path="/a6/twitter/home" exact={true}>
//                <A6BuildHome/>
//            </Route>
//
//
//            </div>
//                  </BrowserRouter>
//            //    <div className="App">
//            //    </div>
//              );
//            }
//
//            export default App;



//function Labs() {
// return (
// <BrowserRouter>
//   <div className="container">
//   <Routes>
//        <Route path="/" element={<Assignment6/>}/>
//        <Route path="/hello" element={<HelloWorld/>}/>
//        <Route path="/tuiter" element={<Tuiter/>}/>
//    </Routes>
//   </div>
//    </BrowserRouter>
// );
//}
//export default Labs;

//export default App;