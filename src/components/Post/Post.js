import React from 'react'
import "./post.css"

export default function Post() {
  return (
    
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/11.jpg" alt="" className='postImage'/>
                <span className='postUserName'>Savii Dissanayake</span>
                <span className='postTime'>5 min ago</span>
            </div>
            <div className="postCenter">
              <div className="postCaption">
              “Always be yourself and have faith in yourself. Do not go out and look for a successful personality and try to duplicate it.” 
              </div>
              <img src="/images/10.jpg" alt="" className='postedImage'/>
            </div>
            <div className="postBottum">
              <div className="postBottomleft">
                <img src="/images/like.png" alt="" className='reactionPic'/>
                <img src="/images/love.png" alt="" className='reactionPic'/>
                <img src="/images/care.png" alt="" className='reactionPic'/>
                <img src="/images/wow.png" alt="" className='reactionPic'/>
                <img src="/images/angry.png" alt="" className='reactionPic'/>
                <span className='likeCount'>Nishi Perea and 248 others</span>   
              </div>
              <div className="postBottomRight">
              <span className='commentCount'>46 comments</span>
              </div>
            </div>
        </div>
    </div>
    
  )
}
