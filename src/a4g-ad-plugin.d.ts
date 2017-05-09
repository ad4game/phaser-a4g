
declare module 'src/a4g-ad-plugin' {

    interface A4gPluginConfiguration {
        zone: number;
        adEndpoint: string;
        skipOffset: number;
        adTypes: string[];
        fallbackZone: number;
        pauseGame: boolean;
        unpauseGameDelay: number;
    }

    class A4gPlugin extends Phaser.Plugin {
        static configure(config: A4gPluginConfiguration): A4gPlugin;

        onAdShown: Phaser.Signal;
        onAdComplete: Phaser.Signal;

        adEndpoint: string;
        pauseGame: boolean;
        unpauseGameDelay: number;
        skipOffset: number;

        constructor(game: Phaser.Game, pluginManager: Phaser.PluginManager);

        showAd(zone?: number): void;
    }

    export = A4gPlugin;
}
