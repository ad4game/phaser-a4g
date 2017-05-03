This is a Phaser HTML5 framework plugin to integrate both Google Adx and A4G video pre-roll ads into your HTML5 games.

Why we've created it and the target audience:
* We love games, especially the HTML5 flavour.
* We have created this plugin to help our existing and future customers monetise their Phaser games.
* All of our HTML5 publishers, who tried video pre-roll, generated higher revenues.
* Why AdX and not Adsense? Adx is paid by CPM and should generate better profits.

A4G Demo usage
================

The game from this github repository shows how a video pre-roll ad can be integrated into HTML5 framework Phaser game. 
See a working demo showing a video pre-roll: http://xmmorpg.com/phaser-a4g/

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
game.a4gPlugin.showAd();
```

In order to integrate this plugin you will need `YOUR_ZONE_ID`. Unless you are an existing customer, please sign-up as a publisher / website at: http://www.a4g.com/#get-contacted and add a message saying that you are signing up for a Phaser HTML5 game.

Note: Adx has rigorous requirements to join. We will help you with the set-up process to make it as smooth as possible.

A4g Phaser Plugin API
=====================

* `A4gPlugin.configure(config)` creates preconfigured A4gPhaser plugin. It takes 1 parameter, configuration.
Configuration is a regular JavaScript object, which can take following settings:
  * `zone` zone id from A4g (required)
  * `adTypes` array of ad types that can be displayed. Available values are `['video', 'skippablevideo', 'standardvideo', 'text', 'image']`, default value is `['video']` which is equivalent to `standardvideo_skippablevideo`, see required params / ad_type for more info: https://support.google.com/adsense/answer/3112148
  * `skipOffset` number of seconds when ad can be skipped, default value is `10`
  * `fallbackZone` zone id which could be used in case the video cannot be loaded, by default not set. In case the Adx ad will not be loaded we will load a replacement ad (usually with a lower CPM). This could be useful if Adx fills a very small percentage of requests.
* `A4gPlugin.prototype.showAd()` shows an ad
* You can fully control the styling of the div showing the ad. Our publishers often display games in an iframe, which autoscales to 100%.

References:
* http://phaser.io/
* https://github.com/photonstorm/phaser
