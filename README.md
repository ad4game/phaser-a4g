This is a Phaser HTML5 framework plugin to integrate both Google Adx and A4G video pre-roll ads into your HTML5 games.

Why we've created it and a target audience:
* We love games, especially the HTML5 flavour.
* All of our gaming HTML5 game publishers who tried video pre-roll generated higher eCPMs than any other types of ads.
* We have created this plugin to help our existing and future customers to help them monetise their Phaser games.
* Why AdX and not Adsense? Adx is paid by CPM and in overhelming majority of cases that will translate into generating better profits.

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

In order to integrate this plugin you will need `YOUR_ZONE_ID`. Unless you are already out customers please sign-up as a publisher / website at: http://www.a4g.com/#get-contacted
and mention you are signing up for a Phaser HTML5 plugin.
Note: you will need our help to set you up with a Google AdX account

A4g Phaser Plugin API
=====================

* `A4gPlugin.configure(config)` create preconfigured A4gPhaser plugin. It takes 1 parameter, configuration.
Configuration is a regular object. Following settings can be provided:
  * `zone` zone id from A4g (required)
  * `adTypes` array of ad types that can be showed. Available values are `['video', 'skippablevideo', 'text', 'image']`, default value is `['video']`, see required params / ad_type for more info: https://support.google.com/adsense/answer/3112148
  * `skipOffset` number of seconds when ad can be skipped, default value is `10`
  * `fallbackZone` zone id which would be used in case if video cannot be loaded, by default not set. In case the adx ad will not be loaded we will load a replacement ad with a lower eCPM.
  * `adEndpoint` string (optional) ad delivery endpoint, might be used for testing purpose, default value is `ads.ad4game.com/www/delivery/video.php` 
* `A4gPlugin.prototype.showAd()` shows a4g ad
* You can fully control the styling of the div showing the ad. Our publishers often display games in an iframe, which autoscale to 100%.

References:
* http://phaser.io/
* https://github.com/photonstorm/phaser
