
import { useState, useEffect } from "react";
import axios from "axios";

function Suggestion() {
    const [pfData, setPfData] = useState(null);
    const [suggestion, setSuggestion] = useState(null);
    useEffect(() => {
        axios.get("./data/dummy.json")
            .then((data) => {
                setPfData(data.data.profile);
                console.log(data.data.profile);
            })
            .catch((er) => {
                console.log(er);
            })
        axios.get("./data/dummy.json")
            .then((data) => {
                setSuggestion(data.data.suggestions);
            })
            .catch((er) => {
                console.log(er);
            })
    }, []);
    return (
        <div className="suggestions">
            {
                pfData ? (
                    <div className="suggestprofile">
                        <img src={pfData.profile_pic} />
                        <div className="suggestpfdetails">
                            <h2>{pfData.username}</h2>
                            <h3>{pfData.name}</h3>
                        </div>
                        <button>Switch</button>
                    </div>
                ) : (
                    <p>Loading....</p>
                )
            }
            <div className="suggesthead">
                <h3>Suggested for you</h3>
                <h3>See all</h3>
            </div>
            <div className="suggestpeople">
                {
                    suggestion ? (
                        suggestion.map((s) =>
                            <div className="suggest1" key={s.id}>
                                <img src={s.profile_pic} />
                                <h3>{s.username}</h3>
                                <button>Follow</button>
                            </div>
                        )
                    ) : (
                        <p>Loading....</p>
                    )
                }
            </div>
            <p>About . Help . Press . API . Jobs . Privacy . Terms . <br />
                Location . Language . Meta Verified</p>
        </div>
    );
}

export default Suggestion;
