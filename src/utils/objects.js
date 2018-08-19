import angular from 'angular';

export default class Objects {
    
    static isSet(obj){
        return obj !== null && obj !== undefined && !Number.isNaN(obj);
    }
    
    static isUnset(obj){
        return !Objects.isSet(obj);
    }
    
    static isEmptyCollection(collection) {
        return Objects.size(collection) === 0;
    }
    
    static size(obj) {
        if (Objects.isUnset(obj)) {
            return 0;
        }
        const value = obj.length;
        if (angular.isNumber(value)) {
            return value;
        }
        if (angular.isObject(obj)) {
            return Objects.size(Object.keys(obj));
        }
        return 0;
    }
}
