import angular from 'angular';

export default class Strings {
    
    static trimToEmptyString(value) {
        if (Objects.isUnset(value)) {
            return '';
        }
        return (value + '').trim();
    }
    
    static isBlank(value) {
        return Strings.trimToEmptyString(value).length === 0;
    }
    
    static isNotBlank(value) {
        return !Strings.isBlank(value);
    }
    
    static lowercase(value) {
        if (!angular.isString(value)) {
            return value;
        }
        return value.toLowerCase();
    }
    
    static uppercase(value) {
        if (!angular.isString(value)) {
            return value;
        }
        return value.toUpperCase();
    }
    
    static equals(s1, s2) {
        return s1 === s2;
    }
    
    static equalsIgnoreCase(s1, s2) {
        return Strings.lowercase(s1) === Strings.lowercase(s2);
    }
    
    static contains(haystack, needle) {
        if (!angular.isString(haystack) || !angular.isString(needle)) {
            return false;
        }
        return haystack.indexOf(needle) > -1;
    }
    
    static containsIgnoreCase(haystack, needle) {
        if (!angular.isString(haystack) || !angular.isString(needle)) {
            return false;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1;
    }
}
