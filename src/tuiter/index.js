import {Link} from "react-router-dom";
//import NavigationSidebar from "./navigation-sidebar";
//import WhoToFollowList from "./who-to-follow-list";
//import PostSummaryItem from "./post-summary-list/post-summary-item";
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeScreen from "./HomeScreen";
import EditPage from "./EditProfileScreen/EditPage";
import HomeComponent from "./home";
import ProfilePage from "./ProfileScreen/ProfilePage";
import profile from "./ProfileScreen/profile";
import TuitsList from "./tuits/TuitsList";
import whoReducer
  from "./reducers/who-reducer";

import tuitsReducer from "./tuits/tuits-reducer";

import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile:profile}});


function Tuiter() {
 return (
    <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
               style={{"position": "relative"}}>
            <Routes>
              <Route path="Home"    element={<HomeComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="editprofile" element={<EditPage/>}/>
            </Routes>
       </div>
       <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>

       </div>
        </Provider>
 );
}

export default Tuiter