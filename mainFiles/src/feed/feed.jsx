

import { useState, useEffect } from "react";
import axios from "axios";
import Storylist from "./storylist.jsx";
import Post from "./post.jsx";

function Feed() {
    const [post, setPost] = useState([]);
    const [err, setErr] = useState(null);
    useEffect(() => {
        axios.get("./data/dummy.json")
            .then((data) => {
                console.log(data.data.posts);
                setPost(data.data.posts);
            })
            .catch((er) => {
                console.log(er);
            })
    }, [])
    return (
        <div className="feed">
            <Storylist />
            <div className="postlist">
                {
                    post.length > 0 ? (
                        post.map((p) => <Post key={p.id} name={p.user.username} profile_pic={p.user.profile_pic}
                            image={p.image} id={p.id} caption={p.caption} likes={p.likes} comments={p.comments} />
                        )
                    ) : (
                        <p>Loading.....</p>
                    )
                }
            </div>
        </div>
    );
}

export default Feed;