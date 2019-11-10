import React from "react"
import PlaceInfo from "./PlaceInfo"
import Logo from "./images/Atlanta.jpg"

function Destination() {
  



    return(
      <div>
        
        <PlaceInfo
          info={{name:"Frank Amiri",
          imgUrl:"./images/Atlanta.jpg",
          phone:"2146823949",
          email:"fxa170530@utdallas.edu"}}
          />
        
        
        

      </div>
    )
}

export default Destination;