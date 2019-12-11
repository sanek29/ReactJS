import React from "react"

export default class Weather extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        const { location, temperature, is_day, weather_descriptions, weather_icons  } = this.props

        return(
            <div className="weather-container">
                <div className="header">{location}</div>
                <div className="inner-container"> 
                    <div className="image"><img src={weather_icons} alt=""/></div>
                    <div className="current-weather">{temperature}°</div>
                    </div>
                <div className="footer">{weather_descriptions}</div>
            </div>
        )
    }
}