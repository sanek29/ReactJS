import React from "react"
import "./bottom.scss"


export default class BottomSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="bottom-container">
                <img src="https://raw.githubusercontent.com/ipenywis/React-Weather-App/master/src/resources/images/sunny-weather.jpeg" alt="bottom" />
            </div>
        )
    }
}