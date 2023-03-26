import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from '../navigation-sidebar';
import PostSummaryList from '../post-summary-list';
import TuitList from "../Tuitlist";


const Home = () => {
    return(
        <div>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                    <TuitList/>

                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <PostSummaryList title="What's happening"/>
                    </div>
            </div>


        </div>
    )
}

export default Home;