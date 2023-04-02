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
                                <span className="fw-bold">{tuit.username}</span>
                                <i className="ms-1 fas fa-badge-check"></i>
<svg className="ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18"><path d="M504.1 60.4l-32.8-37.4C467.4 12.5 460.8 8 453.5 8H58.5C51.2 8 44.6 12.5 40.7 23l-32.8 37.4C.9 69.9 0 78.7 0 87.8v336.5c0 9 1 17.8 7.9 24.4l32.8 37.4c3.9 10.5 10.5 15 17.8 15h395c7.3 0 13.9-4.5 17.8-15l32.8-37.4c6.9-6.6 7.9-15.4 7.9-24.4V87.8c0-9-1-17.9-7.9-27.4zM52.1 50.4L82 16h348l29.9 34.4H52.1zm348 336.1H111.9l-29.9-34.4h348l-29.9 34.4zM227.1 320l-51.2-51.2 22.6-22.6 28.6 28.6 81.4-81.4 22.6 22.6-104 104z"/></svg>
                                <span className="ms-1 text-secondary">{tuit.handle}</span>
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
