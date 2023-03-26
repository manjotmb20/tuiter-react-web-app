import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (<div className="row mt-2">
        <div className="col">
            <i className="fa fa-comment me-2"></i>
            {tuit.stats.comments}
        </div>
        <div className="col">
            <i className="fa fa-retweet me-2"></i>
            {tuit.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                tuit.liked &&
                <i className="fa fa-heart me-2"
                     style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="fa fa-heart me-2"></i>
            }
            {tuit.stats.likes}
        </div>
        <div className="col">
            <i className="fa fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TuitStats;