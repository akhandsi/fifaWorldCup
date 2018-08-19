import routerHelperService from './router-helper/router-helper.service';
import worldCupService from './worldcup/worldcup.service';

const coreModule = angular.module ('app.core', [
    'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules

coreModule.config (routerHelperService);

coreModule.service ('worldCupService', worldCupService);

export default coreModule;
