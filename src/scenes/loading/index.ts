import { GameObjects, Scene } from 'phaser';

export class LoadingScene extends Scene {
    constructor() {
        super('loading-scene');
    }

    preload(): void {
        this.load.baseURL = 'assets/';
        // key: 'king'
        // path from baseURL to file: 'sprites/king.png'
        this.load.image('king', 'sprites/king.png');
        this.load.image('vision', 'sprites/vision5.png');
        this.load.atlas('a-king', 'spritesheets/king.png', 'spritesheets/king.json');

        this.load.image({
            key: 'tiles',
            url: 'tilemaps/dungeon/dungeon-16-16.png',
        });
        this.load.tilemapTiledJSON('dungeon', 'tilemaps/dungeon/dungeonMap2.json');

        this.load.spritesheet('tiles_spr', 'tilemaps/dungeon/dungeon-16-16.png', {
            frameWidth: 16,
            frameHeight: 16,
        });
    }

    create(): void {
        this.scene.start('level-1-scene');
        this.scene.start('ui-scene');
    }
}
