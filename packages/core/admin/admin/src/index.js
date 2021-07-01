import ReactDOM from 'react-dom';

import StrapiApp from './StrapiApp';
import { Components, Fields, Middlewares, Reducers } from './core/apis';
import { axiosInstance } from './core/utils';
import appCustomisations from './admin.config';
import plugins from './plugins';
import appReducers from './reducers';

window.strapi = {
  backendURL: process.env.STRAPI_ADMIN_BACKEND_URL,
  isEE: false,
  features: [],
  projectType: 'Community',
};

const appConfig = {
  locales: [],
};

const customConfig = appCustomisations.app(appConfig);

const library = {
  components: Components(),
  fields: Fields(),
};
const middlewares = Middlewares();
const reducers = Reducers({ appReducers });
const app = StrapiApp({
  appPlugins: plugins,
  library,
  locales: customConfig.locales,
  middlewares,
  reducers,
});

const MOUNT_NODE = document.getElementById('app');

const run = async () => {
  try {
    const {
      data: {
        data: { isEE, features },
      },
    } = await axiosInstance.get('/admin/project-type');

    window.strapi.isEE = isEE;
    window.strapi.features = features;
    window.strapi.projectType = isEE ? 'Enterprise' : 'Community';
  } catch (err) {
    console.error(err);
  }

  await await app.bootstrapAdmin();
  await app.initialize();
  await app.boot();
  await app.loadTrads();

  ReactDOM.render(app.render(), MOUNT_NODE);
};

run();
