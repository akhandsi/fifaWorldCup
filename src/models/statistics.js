import Model from './model';
import Player from "./player";

export default class Statistics extends Model {
    constructor (){
        super();
        this.goalsSavedStats = [];
        this.goalsScoredStats = [];
    }
    
    toModel (dto) {
        const playerModel = new Player();
        const model = new Statistics();
        model.goalsSavedStats = (dto.goalsSavedStats || []).map(playerDTO => playerModel.toModel(playerDTO));
        model.goalsScoredStats = (dto.goalsScoredStats || []).map(playerDTO => playerModel.toModel(playerDTO));
        return model;
    }
}
