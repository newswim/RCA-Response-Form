import React from 'react'
import Config from './_config'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
const serviceProviders = Config.serviceProviders.slice(1)
const styles = {
  width: {
    width: 480,
  },
}

export default class OtherProviders extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value : 'title'
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        autoWidth={true}
        style={styles.width}
      >
        <MenuItem value={'title'} primaryText={Config.serviceProviders[0]} />
        {serviceProviders.map((i, c) => {
          return (
            <MenuItem key={i} value={i} primaryText={i} />
          )
        })}

      </SelectField>
    )
  }
}
