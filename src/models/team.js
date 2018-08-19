import Model from './model';
import Strings from "../utils/strings";

export default class Team extends Model {
    constructor () {
        super ();
        this.code = null;
        this.country = null;
        this.diffGoal = 0;
        this.draw = 0;
        this.goalAgainst = 0;
        this.goalFor = 0;
        this.lost = 0;
        this.matchPlayed = 0;
        this.points = 0;
        this.win = 0;
        this.goals = 0;
        this.penalties = 0;
    }
    
    isTBD () {
        return Strings.equalsIgnoreCase (this.code, 'TBD');
    }
    
    getFlagUrl () {
        if (this.isTBD ()) {
            return "https://www.fifa.com/assets/img/tournaments/17/2018/flag-fwc2018-placeholder.png";
        }
        return `https://api.fifa.com/api/v1/picture/flags-fwc2018-5/${this.code}`;
    }
    
    toModel (dto) {
        const model = new Team ();
        model.code = dto.code;
        model.country = dto.country;
        model.diffGoal = dto.diffGoal;
        model.draw = dto.draw;
        model.goalAgainst = dto.goalAgainst;
        model.goalFor = dto.goalFor;
        model.lost = dto.lost;
        model.matchPlayed = dto.matchPlayed;
        model.win = dto.win;
        model.points = dto.points;
        model.goals = dto.goals || 0;
        model.penalties = dto.penalties || 0;
        return model;
    }
}
