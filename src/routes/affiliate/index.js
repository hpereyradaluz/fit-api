import bodyParser from 'body-parser'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesAffiliate = (app) => {
  app.post('/affiliate', bodyParser.json(), create)
  app.get('/affiliate/:id', read)
  app.get('/affiliate', readAll)
  app.put('/affiliate/:id', bodyParser.json(), update)
  app.delete('/affiliate/:id', remove)
}

export default routesAffiliate
