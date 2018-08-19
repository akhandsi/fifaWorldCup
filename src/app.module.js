import styles from './styles/styles.scss';
import './services/core.module';
import './app.components';

const appModule = angular.module('fifa-world-cup', [
    'app.core',
    'app.header',
    'app.matches',
    'app.standings',
    'app.statistics',
]);

export default appModule;
