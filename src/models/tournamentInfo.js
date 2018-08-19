import Model from './model';

export default class TournamentInfo extends Model {
    constructor (){
        super();
        this.endDate = null;
        this.startDate = null;
        this.title = null;
    }
    
    toModel (dto) {
        const model = new TournamentInfo();
        model.endDate = dto.endDate;
        model.startDate = dto.startDate;
        model.title = dto.title;
        return model;
    }
}
