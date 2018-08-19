import Model from './model';

export default class Player extends Model {
    constructor (){
        super();
        this.assist = null;
        this.countryCode = null;
        this.goalsSaveRate = null;
        this.goalsSaved = null;
        this.goalsScored = null;
        this.matchesPlayed = null;
        this.minutesPlayed = null;
        this.name = null;
        this.playerId = null;
        this.penaltiesScored = null;
        this.rank = null;
        this.country = null;
    }
    
    getPictureUrl () {
        return `https://api.fifa.com/api/v1/picture/players/2018fwc/${this.playerId}_sq-300_jpg?allowDefaultPicture=true`;
    }
    
    getCountryFlagUrl () {
        return `https://api.fifa.com/api/v1/picture/flags-fwc2018-5/${this.countryCode}`
    }
    
    toModel (dto) {
        const model = new Player ();
        model.assist = dto.assist;
        model.countryCode = dto.countryCode;
        model.goalsSaveRate = dto.goalsSaveRate;
        model.goalsSaved = dto.goalsSaved;
        model.goalsScored = dto.goalsScored;
        model.matchesPlayed = dto.matchesPlayed;
        model.minutesPlayed = dto.minutesPlayed;
        model.name = dto.name;
        model.playerId = dto.playerId;
        model.penaltiesScored = dto.penaltiesScored;
        model.rank = parseInt(dto.rank);
        model.country = dto.country;
        return model;
    }
}
