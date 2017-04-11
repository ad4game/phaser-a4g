A4G Demo usage
================

This game show how A4G video ad can be integrated into Phaser game.

First add `a4g-ad-plugin.js` to your codebase.

Then, everything is needed, just create the A4gPlugin:

```
game.a4gPlugin = game.plugins.add(A4gPlugin.configure({
        zone: YOUR_ZONE_ID
    }));
```
And then, when you want to show the ad just call `showAd()` function
```
game.a4gPlugin.showAd();
```
That's it!

A4g Phaser Plugin API
=====================

- `A4gPlugin.configure(config)` create preconfigured A4gPhaser plugin. It takes 1 parameter which present configuration.
Configuration presented as a regular object. Following settings can be provided.
  - `zone` zone id from A4g (required)
  - `adTypes` array of ad types that can be showed. Available values are ['video', 'text', 'image'], default value is `['video']`
  - `skipOffset` number which indicate when ad can be skipped, default value is `10`
  - `testMode` boolean indicate if use A4g development environment (useful for testing purpose), default value is `false` 
- `A4gPlugin.prototype.showAd()` shows a4g ad