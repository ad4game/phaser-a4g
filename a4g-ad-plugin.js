var A4gPlugin = (function (Phaser) {
    var sessionId = 1;

    function optionalRemove(tagId) {
        var el = document.getElementById(tagId);

        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }

    function getGameContainer(game) {
        return typeof game.parent === 'string' ? document.getElementById(game.parent) : game.parent;
    }

    function getGameContainerId(game) {
        var container = getGameContainer(game);

        if (!container.id) {
            container.id = 'a4g-id-' + Math.round(Math.random() * 100000);
        }

        return container.id;
    }

    function getGameWidth(game) {
        return getGameContainer(game).offsetWidth;
    }

    function getGameHeight(game) {
        return getGameContainer(game).offsetHeight;
    }

    function appendExtraParams(url, extraParams) {
        var extraParamsPairs = [];
        
        for (var extraParamName in extraParams) {
            extraParamsPairs.push(extraParamName + '=' + encodeURIComponent(extraParams[extraParamName]));
        }
        
        return url + (extraParamsPairs.length ? '&' + extraParamsPairs.join('&') : '');
    }
    
    function A4gPlugin(game, pluginManager) {
        Phaser.Plugin.call(this, game, pluginManager);

        this.adTypes = ['video'];
        this.zone = null;
        this.extraParams = {};
        this.onAdShown = new Phaser.Signal();
        this.onAdComplete = new Phaser.Signal();
    }

    A4gPlugin.configure = function (config) {
        var preconfiguredPlugin = function (game, pluginManager) {
            A4gPlugin.call(this, game, pluginManager);

            if (config.zone) {
                this.zone = config.zone;
            }

            if (config.adEndpoint) {
                this.adEndpoint = config.adEndpoint;
            }

            if (config.skipOffset) {
                this.skipOffset = config.skipOffset;
            }

            if (config.adTypes) {
                this.adTypes = config.adTypes;
            }

            if (config.fallbackZone) {
                this.extraParams.fajszone = config.fallbackZone;
            }

            if (config.timeout) {
                this.timeout = config.timeout;
            }

            if (config.pauseGame) {
                this.pauseGame = config.pauseGame;
            }

            if (config.unpauseGameDelay) {
                this.unpauseGameDelay = config.unpauseGameDelay;
            }
        };
        preconfiguredPlugin.prototype = Object.create(A4gPlugin.prototype);
        return preconfiguredPlugin;
    };

    A4gPlugin.prototype = Object.create(Phaser.Plugin.prototype);

    A4gPlugin.prototype.adEndpoint = 'ads.ad4game.com/www/delivery/video.php';
    A4gPlugin.prototype.onAdShown = null;
    A4gPlugin.prototype.onAdComplete = null;
    A4gPlugin.prototype.pauseGame = true;
    A4gPlugin.prototype.unpauseGameDelay = 500;
    A4gPlugin.prototype.timeout = 35000;
    A4gPlugin.prototype.skipOffset = 10;

    A4gPlugin.prototype.showAd = function (zone) {
        var scriptEl = document.createElement('SCRIPT'),
            antiCache = Math.round(Math.random() * 100000),
            game = this.game,
            callbackFn = '__A4GCB' + Math.round(Math.random() * 100000),
            currentSessionId = sessionId++,
            tid,
            pauseGame = this.pauseGame,
            unpauseGameDelay = this.unpauseGameDelay,
            registeredCallback = function () {
                this.onAdComplete.dispatch(currentSessionId);

                if (pauseGame) {
                    setTimeout(function () {
                        game.paused = false;
                    }, unpauseGameDelay);
                }

                clearTimeout(tid);
                window[callbackFn] = function () {};
            };

        this.onAdShown.dispatch(currentSessionId);
        tid = setTimeout(registeredCallback, this.timeout);

        if (pauseGame) {
            game.paused = true;
        }

        optionalRemove('A4Gwrap');
        optionalRemove('a4gpreloader');

        window[callbackFn] = registeredCallback;
        scriptEl.onerror = registeredCallback;

        scriptEl.async = true;
        scriptEl.type = 'text/javascript';
        scriptEl.src = appendExtraParams('//' + this.adEndpoint +
            '?zoneid=' + (zone || this.zone) +
            '&width=' + getGameWidth(game) +
            '&height=' + getGameHeight(game) +
            '&adtype=' + this.adTypes.join('_') +
            '&cb=' + callbackFn +
            '&disableflash=1' +
            '&siteurl=' + location.href +
            '&wrapper=' + getGameContainerId(game) +
            '&skipoffset=' + this.skipOffset + 
            '&autoplay=1' +
            '&l=' + antiCache, this.extraParams);

        getGameContainer(game).insertAdjacentElement('afterend', scriptEl);
    };

    return A4gPlugin;
} (window.Phaser));
