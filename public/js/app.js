angular.module('app', ['ngRoute', 'ngAutocomplete', 'flow'])
    .config(routes)
    .controller('subscribeController', subscribeController)
    .service('userService', userService)
    .factory('userFactory', userFactory)