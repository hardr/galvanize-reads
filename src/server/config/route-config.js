(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const readRoutes = require('../routes/reads');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/read', readRoutes);

  };

})(module.exports);
