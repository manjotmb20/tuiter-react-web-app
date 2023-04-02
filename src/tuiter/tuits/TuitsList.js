import React, {useEffect} from "react";

import TuitItem from "./TuitItem";
import {useDispatch,useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const selectAllTuits = (state) => state.tuits;

const TuitsList = () => {
    const {tuits, loading} = useSelector(
                               state => state.tuitsData)
                              const dispatch = useDispatch();
                              useEffect(() => {
                                dispatch(findTuitsThunk())
                              }, [])
    if(loading) {
        return <h2>Loading...</h2>
    }

    return(
       <ul className="list-group">
              {
                    tuits.map(tuit =>
                        <TuitItem key={tuit._id} tuit={tuit}/>
                    )
              }
         </ul>
    )

}


export default TuitsList;
