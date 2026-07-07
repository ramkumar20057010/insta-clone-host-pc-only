
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Story() {
    const [story, setStory] = useState(null);
    const { id, total } = useParams();
    const [err, setErr] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/data/dummy.json")
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Couldn't fetch data....");
                }
                return resp.json();
            })
            .then((data) => {
                const stories = data.stories;
                const singleStory = stories.find((i) => i.id == id)
                setStory(singleStory);
            })
            .catch((er) => {
                console.log(er.message);
                setErr(er.message);
            })
    }, [id]);
    const stylebg = {
        backgroundImage: story ? `url(${story.image})` : "none"
    }
    const changeStory = (i, tot) => {
        if (i > 0 && i <= tot) {
            navigate(`/story/${i}/${tot}`);
        }
        else {
            navigate("/");
        }
    }
    return (
        <div className="story">
            {
                story ? (
                    <div className="viewstory" style={stylebg}>
                        <div className="viewstorypf">
                            <img src={story.user.profile_pic} />
                            <h3>{story.user.username}</h3>
                        </div>
                        <div className="storyimg">
                            <center>
                                <button onClick={() => changeStory(Number(id) - 1, Number(total))}><i className="ri-arrow-left-line"></i></button>
                                <img src={story.image} />
                                <button onClick={() => changeStory(Number(id) + 1, Number(total))}> <i className="ri-arrow-right-line"></i></button>
                            </center>
                        </div>
                    </div>
                ) : (
                    <p>Loading....</p>
                )
            }
        </div >
    );
}

export default Story;