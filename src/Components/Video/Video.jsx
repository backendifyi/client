import React from 'react'
import { Card } from "react-bootstrap"

import "./Video.css"

const Video = () => {
   const videoId = "ht5tXDOBS5I"; // Replace this with your actual YouTube video ID
   

   return (
     <>
       <Card className="featuresCard">
         <center>
           <div className="featuresCardTitle">Backendifyi Explained!!</div>
           <br />
           <div className="iframe-container">
             <iframe
               src="https://www.youtube.com/embed/ht5tXDOBS5I"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
             ></iframe>
           </div>
         </center>
         <br />
       </Card>
     </>
   );
}

export default Video