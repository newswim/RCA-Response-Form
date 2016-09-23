import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Config from './_config.js'
const favFeatures = Config.favFeatures.slice(1)
const styles = {
  width: {
    width: 480,
  },
}
export default class FavoriteFeatures extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 'title'}
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.width}
          autoWidth={true}
        >
          <MenuItem value={'title'} primaryText={Config.favFeatures[0].title} />
          {favFeatures.map((i, c) => {
            return (
              <MenuItem key={i} value={i} primaryText={i} />
            )
          })}

        </SelectField>
      </div>
    )
  }
}
