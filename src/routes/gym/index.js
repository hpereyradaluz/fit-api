import bodyParser from 'body-parser'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesGym = (app) => {
  app.post('/gym', bodyParser.json(), create)
  app.get('/gym/:id', read)
  app.get('/gym', readAll)
  app.put('/gym/:id', bodyParser.json(), update)
  app.delete('/gym/:id', remove)
}

export default routesGym
