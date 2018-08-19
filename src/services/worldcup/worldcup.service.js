import Standing from "../../models/standing";
import Match from "../../models/match";
import Team from "../../models/team";
import Statistics from "../../models/statistics";
import TournamentInfo from "../../models/tournamentInfo";

export default class WorldCupService {
    constructor ($http, $log) {
        'ngInject';
        this.$http = $http;
        this.$log = $log;
    }
    
    getTeams () {
        return this._getTeams("https://morning-citadel-77635.herokuapp.com/rest/fifa/teams");
    };
    
    getMatches () {
        return this._getMatches ("https://morning-citadel-77635.herokuapp.com/rest/fifa/matches");
    }
    
    getStandings () {
        return this._getStandings("https://morning-citadel-77635.herokuapp.com/rest/fifa/standings");
    };
    
    getStatistics () {
        return this._getStatistics("https://morning-citadel-77635.herokuapp.com/rest/fifa/statistics");
    };
    
    getTournamentInfo () {
        return this._getTournamentInfo("https://morning-citadel-77635.herokuapp.com/rest/fifa/tournamentInfo");
    };
    
    _getTeams (endPoint) {
        return this.$http.get (endPoint)
            .then (response => new Team().toModels(response.data))
            .catch (err => this.$log.info (err));
    };
    
    _getMatches (endPoint) {
        return this.$http.get (endPoint)
            .then (response => new Match().toModels(response.data))
            .catch (err => this.$log.info (err));
    };
    
    _getStandings (endPoint) {
        return this.$http.get (endPoint)
            .then (response => new Standing().toModels(response.data))
            .catch (err => this.$log.info (err));
    };
    
    _getStatistics (endPoint) {
        return this.$http.get (endPoint)
            .then (response => new Statistics().toModels(response.data))
            .catch (err => this.$log.info (err));
    };
    
    _getTournamentInfo (endPoint) {
        return this.$http.get (endPoint)
            .then (response => new TournamentInfo().toModels(response.data))
            .catch (err => this.$log.info (err));
    };
}
