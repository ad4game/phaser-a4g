A4G Demo usage
================

This game show how A4G video ad can be integrated into HTML5 framework Phaser game.

First add `a4g-ad-plugin.js` to your codebase.

Then, everything is needed, just create the A4gPlugin:

```
game.a4gPlugin = game.plugins.add(A4gPlugin.configure({
        zone: YOUR_ZONE_ID
    }));
```
To receive YOUR_ZONE_ID, please sign-up as a publisher / website at: http://www.a4g.com/#get-contacted

And then, when you want to show the ad just call `showAd()` function
```
game.a4gPlugin.showAd();
```
That's it!

See demo page with this example code here: http://xmmorpg.com/phaser-a4g/

A4g Phaser Plugin API
=====================

- `A4gPlugin.configure(config)` create preconfigured A4gPhaser plugin. It takes 1 parameter which present configuration.
Configuration presented as a regular object. Following settings can be provided.
  - `zone` zone id from A4g (required)
  - `adTypes` array of ad types that can be showed. Available values are ['video', 'skippablevideo', 'text', 'image'], default value is `['video']`
  - `skipOffset` number which indicate when ad can be skipped, default value is `10`
  - `adEndpoint` string optional ad delivery endpoint, might be used for testing purpose, default value is `ads.ad4game.com/www/delivery/video.php` 
- `A4gPlugin.prototype.showAd()` shows a4g ad

See for references:
* http://phaser.io/
* https://github.com/photonstorm/phaser
