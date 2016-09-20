import React from 'react'
import Toggle from 'material-ui/Toggle'

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
}

const ToggleSwitch = () => (
  <div style={styles.block}>
    <Toggle
      label="Label on the right"
      labelPosition="right"
      style={styles.toggle}
    />
  </div>
)
export default ToggleSwitch
