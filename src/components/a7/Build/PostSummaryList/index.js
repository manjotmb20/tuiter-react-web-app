import PostSummaryListItem from "./PostSummaryListItem";
import post from "./post.json";
import {useSelector} from "react-redux";
import who from "./who.json"


import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";
import React from "react";



const PostSummaryList = () => {

    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
            Who to follow
            </li>
            {
                post.map((p) => {
                    return(<PostSummaryListItem userName={p.userName}  handle={p.handle} avatarIcon={p.avatarIcon} />)
                })
            }
        </ul>
    );
}
export default PostSummaryList;

// {
//     post.map((p) => {
//         return(<PostSummaryListItem topic={p.topic} userName={p.userName} time={p.time} title={p.title} image={p.image} tweets={p.tweets}/>)
//     })
// }