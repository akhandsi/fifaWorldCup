import moment from 'moment';
import Model from './model';
import Strings from '../utils/strings';
import Team from "./team";
import Objects from "../utils/objects";

export default class Match extends Model {
    constructor () {
        super ();
        this.venue = null;
        this.location = null;
        this.gameStatus = null;
        this.dateTime = null;
        this.time = null;
        this.stageName = null;
        this.winnerCode = null;
        this.homeTeam = null;
        this.awayTeam = null;
    }
    
    isFuture () {
        return Strings.equalsIgnoreCase (this.status, 'future');
    }
    
    isHomeTeamWinner () {
        return this.isWinner (this.homeTeam.code);
    }
    
    isAwayTeamWinner () {
        return this.isWinner (this.awayTeam.code);
    }
    
    isWinner (teamCode) {
        return this.hasWinner () && Strings.equalsIgnoreCase (this.winnerCode, teamCode);
    }
    
    isDraw () {
        return !this.hasWinner ();
    }
    
    hasWinner () {
        return Objects.isSet (this.winnerCode);
    }
    
    matchScheduleDisplay () {
        return moment (this.dateTime).format ("dddd, MMMM Do YYYY, h:mm:ss a");
    }
    
    toModel (dto) {
        const teamModel = new Team ();
        const model = new Match ();
        model.venue = dto.venue;
        model.location = dto.location;
        model.gameStatus = dto.gameStatus;
        model.time = dto.time;
        model.stageName = dto.stageName;
        model.winnerCode = dto.winnerCode;
        model.homeTeam = teamModel.toModel (dto.homeTeam);
        model.awayTeam = teamModel.toModel (dto.awayTeam);
        model.dateTime = dto.dateTime;
        return model;
    }
}
