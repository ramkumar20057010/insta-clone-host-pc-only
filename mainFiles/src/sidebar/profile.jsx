

import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
    const [profile, setProfile] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [showFollowers,setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    useEffect(() => {
        axios.get("./data/dummy.json")
            .then((data) => {
                setProfile(data.data.profile);
                setFollowers(data.data.followers);
                setFollowing(data.data.following);
                console.log(data.data.profile);
            })
            .catch((er) => {
                console.log(er.message);
            })
    }, []);

    function handleEdit(ev) {
        setProfile((prev) => (
            { ...prev, [ev.target.name]: ev.target.value }));
    }
    const editProfile = () => {
        setShowEdit(!showEdit);
    }
    const styleEdit = {
        display: showEdit ? "block" : "none"
    }
    const viewFollowers= () =>{
        setShowFollowers(!showFollowers);
    }
    const viewFollowing =() =>{
        setShowFollowing(!showFollowing);
    }
    const styleFollowers={
        display:showFollowers?"block":"none"
    }
    const styleFollowing={
        display:showFollowing?"block":"none"
    }
    const removeFollowers =(id) =>{
        const newList = followers.filter((i) => i.id!=id);
        setFollowers(newList);
    }
    const unFollow = (id) =>{
        const newList = following.filter((i) => i.id!= id);
        setFollowing(newList);
    }
    return (
        <div className="profile">
            {
                profile ? (
                    <div className="viewpf">
                        <img src={profile.profile_pic} />
                        <div className="profdetails">
                            <h2>{profile.username}</h2>
                            <h3>{profile.name}</h3>
                            <div className="profcont">
                                <p onClick={viewFollowers} ><mark>{followers.length}</mark> Followers</p>
                                <p onClick={viewFollowing}><mark>{following.length}</mark> Following</p>
                            </div>
                            <p>{profile.about}</p>

                            
                            <ul className="followers" style={styleFollowers}>
                                <button className="cancel" onClick={ viewFollowers }>X</button>
                                <div className="follow1">
                                    {followers.length > 0 ? (
                                        followers.map((f) =>
                                            <li>
                                                <img src={f.profile_pic} />
                                                <h3>{f.username}</h3>
                                                <button onClick={ () => removeFollowers(f.id) }>Remove</button>
                                            </li>
                                        )) : (
                                        <p>You have no followers...</p>
                                    )
                                    }
                                </div>
                            </ul>
                            <ul className="followers" style={styleFollowing}>
                                <button className="cancel" onClick={ viewFollowing }>X</button>
                                <div className="follow1">
                                    {following.length > 0 ? (
                                        following.map((f) =>
                                            <li>
                                                <img src={f.profile_pic} />
                                                <h3>{f.username}</h3>
                                                <button onClick={() => unFollow(f.id)}>Unfollow</button>
                                            </li>
                                        )) : (
                                        <p>You haven't follow any people...</p>
                                    )
                                    }
                                </div>
                            </ul>
                            <button onClick={editProfile}>Edit Profile</button>
                            <div className="editprof" style={styleEdit}>
                                <label>Edit User Name:</label>
                                <input type="text" name="username" onChange={handleEdit} value={profile.username} /><br /><br />
                                <label>Edit Name:</label>
                                <input type="text" name="name" onChange={handleEdit} value={profile.name} /><br /><br />
                                <label>Edit About:</label>
                                <input type="text" name="about" onChange={handleEdit} value={profile.about} /> <br /><br />
                                <button onClick={editProfile}>Update Profile</button>
                            </div>
                            <p className="about">About . Help . Press . API . Jobs . Term .<br />
                                Location . Language . Meta Verified<br /><br />
                                2026 INSTAGRAM FROM META</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
}

export default Profile;