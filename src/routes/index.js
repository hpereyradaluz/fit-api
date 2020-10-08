import routesAffiliate from './affiliate'
import routesSubsidiary from './subsidiary'

const routes = (app) => {
  routesAffiliate(app)
  routesSubsidiary(app)
}

export default routes
