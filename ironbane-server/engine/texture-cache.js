var angular = require('ng-di');

angular.module('engine.texture-cache', [])
    .service('$textureCache', [
        '$cacheFactory',
        function ($cacheFactory) {
            'use strict';

            return $cacheFactory('$textureCache');
        }
    ]);
