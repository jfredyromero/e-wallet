import HomeController from './home.controller.js';
import DocsController from './docs.controller.js';
import DemoController from './demo.controller.js';
import NotFoundController from './not-found.controller.js';

const controllers = {
  home: HomeController,
  docs: DocsController,
  demo: DemoController,
  notFound: NotFoundController,
};

export { controllers };
