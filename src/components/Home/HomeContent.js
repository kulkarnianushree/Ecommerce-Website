import SubHeading from "../Heading/SubHeading"
import React from "react"
import ToursItem from "./ToursItem"
const HomeContent = () => {
    return (
        <React.Fragment>
            <div className="home">
                <SubHeading isHome={true} />
                <div className="album-section">
                    <div className="album-button">Get Our Latest Album</div>
                    <div className="play-icon">&#9654;</div>
                </div>
            </div>
            <div className="title">TOURS</div>
            <ToursItem/>
        </React.Fragment>

    )
}
export default HomeContent
