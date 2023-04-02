import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const handleLike = (id) => {
        console.log("like");
        dispatch(likeTuit(id));
    }

    return (<div className="row mt-2">
        <div className="col">
            <i className="fa fa-comment me-2"></i>
            {tuit.replies}
        </div>
        <div className="col">
            <i className="fa fa-retweet me-2"></i>
            {tuit.retuits}
        </div>

        <div className="col" onClick={() => dispatch(updateTuitThunk({
        ...tuit,
        liked: !tuit.liked,
        likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
    }))}>
            {
                tuit.liked &&
                <i className="fa fa-heart me-2"
                   style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="fa fa-heart me-2"></i>
            }
            {tuit.likes}
        </div>
        <div className="col">
            <i className="fa fa-external-link me-2"></i>
        </div>
    </div>)
}

export default TuitStats;