import { getAllGames } from '../fake-api'
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './app.scss'
import { Header } from '@nxegghead/store/ui-shared';

export function App()  {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="games-layout">
          {getAllGames().map((x) => (
            <Card key={x.id} className="game-card">
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {x.rating}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
