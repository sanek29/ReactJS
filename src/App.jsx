import React, {Component} from "react"
import TopSection from "./components/Top"
import BottomSection from "./components/Bottom"
import axios from "axios"

import "./App.css"
import "./app.scss"



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "New York",
            isLoading: true
        }
    }

    updateWeather() {
        const { query } = this.state
        const URL = "http://api.weatherstack.com/current?access_key=2b0f61c3bf353f7371beaa426eaae4b4&query=" + query
        axios.get(URL).then(res => {
            console.log(res)
            return res.data
        }).then(data => {
            this.setState({
                isLoading: false,
                temperature: data.current.temperature, 
                is_day: data.current.is_day, 
                
                weather_descriptions: data.current.weather_descriptions[0], 
                weather_icons: data.current.weather_icons[0]})
        }).catch((err) => {
            if(err)
            console.error("Cannot fetch Weather from API ", err)
        })
    }
    
    componentDidMount() {
        const {eventEmitter} = this.props
        
        this.updateWeather()
        
        eventEmitter.on("updateWeather", data => {
            this.setState({ query: data }, () => this.updateWeather())
            
            
        })
    }
    
    render() {

        const { isLoading, query, temperature, is_day, weather_descriptions, weather_icons  } = this.state

        return(
            <div className="app-container">
                <div className="main-container">
                {isLoading && <h3>Loading Weather...</h3>}
                {!isLoading &&
                <div className="top-section">
                    <TopSection 
                        location={query} 
                        temperature={temperature} 
                        is_day={is_day} 
                        weather_descriptions={weather_descriptions} 
                        weather_icons={weather_icons} 
                        eventEmitter={this.props.eventEmitter} />
                </div>}
                <div className="bottom-section"><BottomSection /></div>  
                    
                </div>
            </div>
        )
    }
}

export default App