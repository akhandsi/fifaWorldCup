export default class MatchesController {
    
    constructor (worldCupService) {
        'ngInject';
        this.worldCupService = worldCupService;
        this.teams = [];
        this.matches = [];
        this.loading = false;
    }
    
    $onInit () {
        this.loading = true;
        this._fetchTeams ();
        this._fetchMatches ();
    };
    
    getGameTitle (game) {
        return game.stageName;
    }
    
    getGameBackgroundClass (game) {
        
        if (game.isDraw ()) {
            return "text-white bg-dark";
        }
        
        if (game.isFuture ()) {
            return "bg-warning";
        }
        
        return 'bg-light';
    }
    
    getHomeTeamBackgroundClass (game) {
        
        if (game.isDraw ()) {
            return "text-white";
        }
        
        if (game.isHomeTeamWinner ()) {
            return "text-white bg-dark";
        }
        
        return 'text-dark';
    }
    
    getAwayTeamBackgroundClass (game) {
        
        if (game.isDraw ()) {
            return "text-white";
        }
        
        if (game.isAwayTeamWinner ()) {
            return "text-white bg-dark";
        }
        
        return 'text-dark';
    }
    
    _fetchTeams () {
        this.worldCupService.getTeams ()
            .then (teams => {
                this.teams = teams;
            });
    }
    
    _fetchMatches () {
        this.worldCupService.getMatches ()
            .then (matches => {
                this.matches = matches;
                this.loading = false;
            })
            .catch (err => this.loading = false);
    }
}
