import standingsComponent from './standings.component';

const standingsModule = angular.module('app.standings', []);

// loading components, services, directives, specific to this module.
standingsModule.component('standings', standingsComponent);

// export this module
export default standingsModule;
