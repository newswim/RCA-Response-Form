import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Questions from './Questions'
import FavoriteFeatures from './FavoriteFeatures'
import OtherProviders from './OtherProviders'
import SubmitButton from './Submit'

const style = {
  'maxWidth': '75%',
  'margin' : 'auto'
}

const CardLayout = () => (
  <Card
    style={style}
  >
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://www.savicontrols.com/img/logos/logo-savi.svg"
    />
    <CardMedia
      overlay={<CardTitle title="SAVI Response Form" subtitle="CEDIA 2016" />}
    >
      <img src="http://www.savicontrols.com/images/mockup/special.png" alt="hello" />
    </CardMedia>
    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

      <br />
      <FavoriteFeatures />
      <OtherProviders />
      <Questions />
    </CardText>



    <CardActions>
      <SubmitButton />
    </CardActions>
  </Card>
)

export default CardLayout
