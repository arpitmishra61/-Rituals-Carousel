import React, { useState } from 'react'
import "./profiles.css"
import { profileData } from "../../config"

const imageUrl = "../../images/"

const addAnimations = () => {
    document.querySelectorAll(".img-container").forEach((imgc) => {
        imgc.classList.add("animate__animated", "animate__fadeIn")
    })
}
const removeAnimations = () => {
    document.querySelectorAll(".img-container").forEach((imgc) => {
        imgc.classList.remove("animate__animated", "animate__fadeIn")
    })
}

export default function Profiles() {
    const [mainProfile, setMainProfile] = useState(profileData()[0])

    const [profiles, setprofiles] = useState(profileData())


    return (

        <div className="profiles">
            <div className="content animate__animated animate__fadeIn">
                <div className="caption"> {mainProfile.caption}</div>

                <h5>{mainProfile.name}</h5>
                <p>{mainProfile.designation}</p>
            </div>
            <div className="profile-images">
                <i className="material-icons playArrow ">play_arrow</i>
                {profiles.map((profile, i) => {

                    if (i < 3)

                        return <div className={"img-container " + `img-container-${i}`}>  <img src={require(`./../../images/profile/${profile.imageName}`)} alt="1" className="" /></div>





                    else return null
                })}

                <i className="backward-button material-icons" onClick={
                    (e) => {
                        let temProfiles = profiles
                        let lastProfile = temProfiles.pop()
                        temProfiles.unshift(lastProfile)

                        setMainProfile(temProfiles[0])
                        setprofiles(temProfiles)

                        addAnimations()
                        setTimeout(() => {
                            removeAnimations()

                        }, 500);


                    }
                }>keyboard_arrow_left</i>
                <i className="forward-button material-icons" onClick={
                    (e) => {
                        let temProfiles = profiles
                        let firstProfile = temProfiles.shift()
                        temProfiles.push(firstProfile)

                        setMainProfile(temProfiles[0])
                        setprofiles(temProfiles)

                    }
                }>keyboard_arrow_right</i>
            </div>





        </div>


    )
}