import React from "react"
import Logo from "./images/Atlanta.jpg"

const PlaceInfo= ({name1, name1Onchange, email, emailOnchange, company, companyOnchange}) => (
    <div>
        <a href="https://www.linkedin.com/in/frank-amiri-55744316b/">
                <img src={Logo} alt="smiley face"/>
            </a>
        
        <h3>Name:</h3>
        <input type="text" name="firstname" value={name1} onChange={name1Onchange} placeholder="Your name.."/>
        <h3>Email:</h3>
        <input type="text" name="email" value={email} onChange={emailOnchange} placeholder="Your email.."/>
        <h3>Company</h3>
        <input type="text" name="company" value={company} onChange={companyOnchange} placeholder="Your company.."/>
    </div>
)
export default PlaceInfo;