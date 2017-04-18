This is a Phaser HTML5 framework plugin which allows to integrate both Google Adx and A4G video pre-roll ads into your HTML5 games.

A4G Demo usage
================

The game from this github repository shows how A4G/ADX video pre-roll ad can be integrated into HTML5 framework Phaser game.

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

In order to integrate this plugin you will need `YOUR_ZONE_ID`, please sign-up as a publisher / website at: http://www.a4g.com/#get-contacted
and mention you are signing up for a Phaser HTML5 plugin. After reviewing your application our Account Manager will contact you with `YOUR_ZONE_ID`

```
game.a4gPlugin.showAd();
```
That's it!

See a demo page running the code from this game here: http://xmmorpg.com/phaser-a4g/

A4g Phaser Plugin API
=====================

- `A4gPlugin.configure(config)` create preconfigured A4gPhaser plugin. It takes 1 parameter which present configuration.
Configuration presented as a regular object. Following settings can be provided.
  - `zone` zone id from A4g (required)
  - `adTypes` array of ad types that can be showed. Available values are ['video', 'skippablevideo', 'text', 'image'], default value is `['video']`
  - `skipOffset` number which indicate when ad can be skipped, default value is `10`
  - `adEndpoint` string optional ad delivery endpoint, might be used for testing purpose, default value is `ads.ad4game.com/www/delivery/video.php` 
  - `fallbackZone` zone id which would be used in case if video cannot be loaded, by default not set
- `A4gPlugin.prototype.showAd()` shows a4g ad

See for references:
* http://phaser.io/
* https://github.com/photonstorm/phaser
