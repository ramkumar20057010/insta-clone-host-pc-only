import { useState, useEffect } from "react";

function Post(props) {
    const [likes,setLikes] = useState(props.likes);
    const [changeLikes,setChangeLikes] = useState(false);
    const [comments,setComments] = useState(props.comments);
    const [showComment, setShowComment] = useState(false);
    const [commentValue,setCommentValue] = useState("");
    const showComm = () =>{
        setShowComment(!showComment);
    }
    const addLike = () =>{
        setChangeLikes(!changeLikes);
        if(changeLikes){
            setLikes(likes-1);
        }
        else{
            setLikes(likes+1);
        }
    }
    const handleComment = (ev) =>{
        console.log(ev.target.value);
        setCommentValue(ev.target.value);

    }
    const addComments = () =>{
        const newComment={
            user:"osaragi_447",comment:commentValue
        }
        setComments((prev) => [...prev,newComment]);
    }
    const commentStyle={
        display: showComment=== true?"block":"none"
    }
    return (
        <div className="post">
            <div className="postprofile">
                <div className="profimg">
                    <img src={props.profile_pic} />
                    <h3>{props.name}</h3>
                </div>
                <button>Follow</button>
            </div>
            <center><img src={props.image} /></center>
            <ul className="postdetails">
               <li onClick={ addLike } ><i className="ri-poker-hearts-line"></i> {likes}</li> 
               <li onClick ={ showComm } ><i className="ri-chat-3-line"></i> {comments.length}</li> 
               <li><i className="ri-send-ins-fill"></i></li> 
            </ul>
            <p>{props.caption}</p>
            <div className="comments" style={commentStyle}>
                <h2>Comments</h2>
                {
                    comments.length>0?(
                        comments.map((c) =>
                        <div className="prevcomment" key={c.user}>
                            <h3>@{c.user}</h3>
                            <p>{c.comment}</p>
                        </div>
                        )
                    ):(
                            <p>Loading...</p>
                        )
                }
                <input type="text" value={commentValue} onChange={ handleComment } /><br /><br />
                <button onClick={addComments}>Add Comment</button>
            </div>
        </div>
    );
}

export default Post;