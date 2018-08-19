import matchesComponent from './matches.component';

const matchesModule = angular.module('app.matches', []);
matchesModule.component('matches', matchesComponent);

export default matchesModule;
