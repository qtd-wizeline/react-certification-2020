import React from "react"


function VideoCard({thumbnail,title}){
    return(
        <div className = "card">
            <h2>
                {title}
            </h2>
            <img src={thumbnail}></img>
            
        </div>

    )
}

export default VideoCard;