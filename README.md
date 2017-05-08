This is a Phaser HTML5 framework plugin to integrate both Google Adx and A4G video pre-roll ads into your HTML5 games.

Why we've created it and the target audience:
* We love games, especially the HTML5 flavour.
* We have created this plugin to help our existing and future customers monetise their Phaser games.
* All of our HTML5 publishers, who tried video pre-roll, generated higher revenues.
* Why AdX and not Adsense? Adx is paid by CPM and should generate better profits.

A4G Demo usage
================

The game from this github repository shows how a video pre-roll ad can be integrated into HTML5 framework Phaser game. 
See a working demo showing a video pre-roll and inter-game ad each 10 seconds: http://xmmorpg.com/phaser-a4g/example

Integration steps:
* First include `a4g-ad-plugin.js` into your codebase.
* Then create the A4gPlugin:

```
game.a4gPlugin = game.plugins.add(A4gPlugin.configure({
        zone: YOUR_ZONE_ID
    }));
```
* Whenever you want to show an ad within your game just call `showAd()` function. 
Typically game developers call this function on the beginning of the game and between the levels. 

```
game.a4gPlugin.onAdComplete.add(function () {
        console.log('Ad has been completed');
    });
    
game.a4gPlugin.showAd();

```

In order to integrate this plugin you will need `YOUR_ZONE_ID`. Unless you are an existing customer, please sign-up as a publisher / website at: http://www.a4g.com/#get-contacted and add a message saying that you are signing up for a Phaser HTML5 game.

Note: Adx has rigorous requirements to join. We will help you with the set-up process to make it as smooth as possible.

NPM
=====================

You can get the latest NPM from here: https://www.npmjs.com/package/@ad4game/phaser-a4g
```
npm install @ad4game/phaser-a4g --save-dev
```

A4g Phaser Plugin API
=====================

* `A4gPlugin.configure(config)` creates preconfigured A4gPhaser plugin. It takes 1 parameter, configuration.
Configuration is a regular JavaScript object, which can take following settings:
  * `zone` zone id from A4g (required)
  * `adTypes` array of ad types that can be displayed. Available values are `['video', 'skippablevideo', 'standardvideo', 'text', 'image']`, default value is `['video']` which is equivalent to `standardvideo_skippablevideo`, see required params / ad_type for more info: https://support.google.com/adsense/answer/3112148
  * `skipOffset` number of seconds when ad can be skipped, default value is `10`
  * `fallbackZone` zone id which could be used in case the video cannot be loaded, by default not set. In case the Adx ad will not be loaded we will load a replacement ad (usually with a lower CPM). This could be useful if Adx fills a very small percentage of requests.
  * `timeout` number of milliseconds which indicate ad timeout. It serve for cases if something would go wrong, default value is 35000
  * `pauseGame` boolean indicates if game should be paused while ad is shown, default value is true
  * `unpauseGameDelay` number of milliseconds to wait for unpausing game after ad is hidden (will be used only if `pauseGame` set to true), default value is 500 
* `A4gPlugin.prototype.showAd()` shows an ad
* `A4gPlugin.prototype.onAdShown` `Phaser.Signal` would be triggered when ad shown
* `A4gPlugin.prototype.onAdComplete` `Phaser.Signal` would be triggered when ad showing is completed
* You can fully control the styling of the div showing the ad. Our publishers often display games in an iframe, which autoscales to 100%.

References:
* http://phaser.io/
* https://github.com/photonstorm/phaser
