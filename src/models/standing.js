import Model from './model';
import Team from "./team";

export default class Standing extends Model {
    constructor (){
        super();
        this.groupName = null;
        this.teams = [];
    }
    
    toModel (dto) {
        const teamModel = new Team();
        const model = new Standing ();
        model.groupName = dto.groupName;
        model.teams = (dto.teams || []).map(teamDTO => teamModel.toModel(teamDTO));
        return model;
    }
}
