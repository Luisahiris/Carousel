import React from 'react'
import ReactDom from 'react-dom'
import Carousel from './components/Carousel'
import NavConfig from './components/NavConfig'
import { AutoProvider } from './context/auto'
import './index.css'

class App extends React.Component {
    state = {
        automatic: true,
        toggleAuto: () => {
            this.setState(({ automatic }) => ({
                automatic: automatic === true ? false : true
            }))
        },
        speed: '',
        toggleSpeed: (event) => {
            this.setState({
                speed: event.target.value
            })
        }
    }

    render () {
        return (
            <AutoProvider value={this.state}>
                <NavConfig />
                <Carousel speed={this.state.speed !== ''? this.state.speed : 3000} />
            </AutoProvider>
        )
    }
}

ReactDom.render(
    <App />, 
    document.getElementById('root')
)