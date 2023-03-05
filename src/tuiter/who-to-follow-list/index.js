import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
//const who = whoArray;
//
//const WhoToFollowList = () => {
//    return(
//        <div>
//            <ul>
//                {
//                    who.map((w) => {
//                        return(<WhoToFollowListItem avatarIcon={w.avatarIcon} handle={w.handle} userName={w.userName}/>)
//                    })
//                }
//            </ul>
//        </div>
//
//    );
//}
//export default WhoToFollowList;

const WhoToFollowList = () => {
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};

export default WhoToFollowList;