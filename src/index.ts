import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import { Level1, LoadingScene, UIScene } from './scenes';

window.sizeChanged = () => {
    if (window.game.isBooted) {
        setTimeout(() => {
            window.game.scale.resize(window.innerWidth, window.innerHeight);
            window.game.canvas.setAttribute(
                'style',
                `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
            );
        }, 100);
    }
};
window.onresize = () => window.sizeChanged();

window.game = new Phaser.Game(
    Object.assign(config, {
        scene: [LoadingScene, Level1, UIScene],
        // scene: [GameScene],
    }),
);
