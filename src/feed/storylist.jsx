

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Storylist() {
    const [storyList, setStoryList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("./data/dummy.json")
            .then((data) => {
                console.log(data.data.stories);
                setStoryList(data.data.stories);
            })
            .catch((er) => {
                console.log(er);
            })
    }, [])
    return (
        <div className="storylist">
            {
                storyList.length > 0 ? (
                    storyList.map((s) =>
                        <div className="storyprofile" key={s.id} onClick={() => navigate(`/story/${s.id}/${storyList.length}`)} >
                            <div className="storyprofborder">
                                <img src={s.user.profile_pic} />
                                <h4>{s.user.username}</h4>
                            </div>
                        </div>
                    )) : (
                    <p>Loading....</p>
                )
            }
        </div>
    );
}

export default Storylist;