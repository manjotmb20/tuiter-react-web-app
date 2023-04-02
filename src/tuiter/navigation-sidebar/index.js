import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <Link to="/tuiter" className="list-group-item">
     <i className="fa fa-twitter fa-2x"></i>
        </Link>
     <a className="list-group-item">
     Tuiter
     </a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                    <i className="fa fa-home"> </i>
       <span className="d-none d-xl-inline">Home</span>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                     <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
     </Link>
     <Link to="/" className="list-group-item">
             <i className="fa fa-star"></i>
              <span className="d-none d-xl-inline">Labs</span>
          </Link>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i className="fa fa-bell"></i>
                           <span className="d-none d-xl-inline">Notifications</span>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <i className="fa fa-envelope"></i>
                           <span className="d-none d-xl-inline">Messages</span>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i className="fa fa-bookmark"></i>
                           <span className="d-none d-xl-inline">Bookmarks</span>
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <i className="fa fa-list"></i>
                           <span className="d-none d-xl-inline">Lists</span>
     </a>
     <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i className="fa fa-user"></i>
                           <span className="d-none d-xl-inline">Profile</span>
     </Link>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       <i className="fa fa-minus-circle"></i>
                           <span className="d-none d-xl-inline">More</span>
     </a>
   </div>
 );
};
export default NavigationSidebar;