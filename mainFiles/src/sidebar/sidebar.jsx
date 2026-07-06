

import m1 from "../assets/insta-name.png";
import m2 from "../assets/osaragi.jpeg";
import { useNavigate } from "react-router-dom";

function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className="sidebar">
            <center><img src={m1} /></center>
            <ul className="navbar">
                <li> <i className="ri-home-2-fill"></i>  Home</li>
                <li> <i className="ri-movie-line"></i> Reels</li>
                <li> <i className="ri-send-ins-fill"></i> Messages</li>
                <li> <i className="ri-search-line"></i> Search</li>
                <li> <i className="ri-heart-line"></i> Notifications</li>
                <li> <i className="ri-add-box-line"></i> Create</li>
                <li className="sideprofile" onClick={ () => navigate("/profile")  }>
                    <img src={m2} />
                    <p>Profile</p>
                </li>
            </ul>
            <ul className="more">
                <li> <i className="ri-menu-line"></i> More</li>
                <li> <i className="ri-threads-line"></i> Threads</li>
            </ul>

        </div>
    );
}

export default Sidebar;