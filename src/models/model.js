export default class Model {
    toModel(dto) {
        throw new Error('You have to implement the method doSomething!');
    };
    
    toModels(dtos) {
        return (dtos || []).map(dto => this.toModel(dto));
    }
}
