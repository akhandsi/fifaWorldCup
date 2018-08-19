export default class StatisticsController {
    constructor(worldCupService) {
        'ngInject';
        this.worldCupService = worldCupService;
        this.loading = false;
    }

    $onInit() {
        this.tabs = [
            {
                label: 'Goals Scored',
                key: 'GOALS_SCORED',
            },
            {
                label: 'Top Saves',
                key: 'GOALS_SAVED',
            }
        ];
    
        this.selectedTab = this.tabs[0].key;
        
        this.loading = true;
        this.worldCupService
            .getStatistics()
            .then(statistics => {
                this.loading = false;
                this.statistics = statistics[0];
            })
            .catch(err => (this.loading = false));
    }
    
    changeTab(tab){
        this.selectedTab = tab.key;
    }
}
