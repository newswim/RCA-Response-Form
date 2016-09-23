import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {indigo500, indigo700, redA200} from 'material-ui/styles/colors'
//import logo from './logo.svg'
import Questions from './Questions'
import FavoriteFeatures from './FavoriteFeatures'
import OtherProviders from './OtherProviders'
import './App.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


// We can override any of the theme settings with this object
// http://stackoverflow.com/questions/34971998/how-to-apply-custom-theme-in-material-ui
// http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: indigo500,
    },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <div className="App-intro">Stuff inside of here is centered</div>
        <br />
        <FavoriteFeatures />
        <OtherProviders />
        <Questions />

      </div>
      </MuiThemeProvider>
    )
  }
}

export default App
