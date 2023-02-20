import React from 'react'
import "./addPost.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import MoodIcon from '@mui/icons-material/Mood';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.jpg" alt='' className='addPostPic'/>
                <input placeholder='Whats in your mind, Savidhi?' type="text" className='addPostInput'/>
            </div>
            <hr className='postHr'/>
                <div className="addPostBottom"></div>
                <div className="addPostOptions">
                    <div className="addPostOption">
                    <VideoCameraBackIcon htmlColor='red' className='addPhoto'/>
                    <span className='addPostOptionText'>Live video</span>
                    </div>
                    <div className="addPostOption">
                    <CollectionsIcon htmlColor='limegreen' className='addPhoto'/>
                    <span className='addPostOptionText'>Add Photo/video</span>
                    </div>
                    <div className="addPostOption">
                    <MoodIcon htmlColor='orange' className='addPhoto'/>
                    <span className='addPostOptionText'>Feeling/activity</span>
                    </div> 
                    <button className='PostButton'>Post</button>
                </div>
                
        </div>
    </div>
  )
}
