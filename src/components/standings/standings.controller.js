export default class StandingsController {
    constructor (worldCupService) {
        'ngInject';
        this.worldCupService = worldCupService;
        this.loading = false;
    }
    
    $onInit () {
        this.loading = true;
        this.worldCupService.getStandings ()
            .then (standings => {
                this.loading = false;
                this.standings = standings;
            })
            .catch (err => this.loading = false);
    };
}
