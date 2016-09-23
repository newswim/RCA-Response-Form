import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {
  orange500,
  // blue500,
  indigo500, /*indigo50,*/
  redA200,
} from 'material-ui/styles/colors';


const styles = {
  errorStyle: {
    color: redA200,
  },
  underlineStyle: {
    borderColor: indigo500,
  },
  floatingLabelStyle: {
    color: indigo500,
  },
  floatingLabelFocusStyle: {
    color: orange500,
  },
  hintStyle: {

  },
  inputStyle: {

  }
};

class Questions extends Component {
  render () {
    return (
      <TextField
        floatingLabelText="What other control platforms do you use besides Control4?"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        fullWidth={true}
      />
    )
  }
}

export default Questions
