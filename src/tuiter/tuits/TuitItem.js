import React from 'react';
import './tuit.css';

import TuitStats from './TuitStats';
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
                    <table>
                        <tr>
                            <td className="align-text-top">
                                <img className="rounded-circle wd-avatar-image"
                                     src={tuit['image']}/>
                            </td>
                            <td className="ps-3" style={{width: '100%'}}>
                                <i className="bi bi-x-lg float-end"
                                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                                <span className="fw-bold">{tuit.userName}</span>
                                {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                                <span className="ms-1 text-secondary">@{tuit.handle}</span>
                                <div>
                                    {tuit.tuit}
                                </div>
                                <TuitStats tuit={tuit}/>
                            </td>
                        </tr>
                    </table>
                </li>
    );
}

export default TuitItem;
