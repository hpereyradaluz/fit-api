import bodyParser from 'body-parser'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesSubsidiary = (app) => {
  app.post('/subsidiary', bodyParser.json(), create)
  app.get('/subsidiary/:id', read)
  app.get('/subsidiary', readAll)
  app.put('/subsidiary/:id', bodyParser.json(), update)
  app.delete('/subsidiary/:id', remove)
}

export default routesSubsidiary
