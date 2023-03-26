import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <li className="list-group-item">
           <div className="row">
             <div className="col-2">
               <img className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
             </div>
             <div className="col-8">
               <div className="fw-bold">{who.userName}</div>
               <div>@{who.handle}</div>
             </div>
             <div className="col-2">
               <button className="btn btn-primary rounded-pill float-end">Follow</button>
             </div>
           </div>
          </li>
    );
}
export default WhoToFollowListItem;