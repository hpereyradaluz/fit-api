import routesAffiliate from './affiliate'
import routesGym from './gym'

const routes = (app) => {
  routesAffiliate(app)
  routesGym(app)
}

export default routes
