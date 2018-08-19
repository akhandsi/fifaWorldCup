import appRoutes from '../../services/router-helper/app-routes.js';

export default class HeaderController {
    constructor (worldCupService) {
        'ngInject';
        this.worldCupService = worldCupService;
    }
    
    $onInit () {
        // create tabs of each routes
        this.tabs = appRoutes.map (route => {
            return {
                icon: route.icon,
                label: route.label,
                route: route.name,
            };
        });
        
        this._fetchTournamentInfo();
    };
    
    _fetchTournamentInfo () {
        this.worldCupService.getTournamentInfo ()
            .then (info => this.info = info[0])
            .catch (err => logger.warn(err));
    }
}
