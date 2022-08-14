type ObjectPoint = {
    height: number;
    id: number;
    name: string;
    point: boolean;
    rotation: number;
    type: string;
    visible: boolean;
    width: number;
    x: number;
    y: number;
};

type ObjectButtonOptions = {
    containerHeight: number;
};

type AnimationActionProperties = {
    run: string;
};

type SpriteAndBodyOrigins = {
    spriteOrigin: MatterJS.Vector;
    bodyOrigin: MatterJS.Vector;
};

interface Callback {
    (scaleX: number): void;
}

declare module '*.png';
declare module '*.json';

interface MyInputKeys {
    up: boolean;
    right: boolean;
    down: boolean;
    left: boolean;
    space: boolean;
}

interface Window {
    sizeChanged: () => void;
    game: Phaser.Game;
    __keysPressed__: MyInputKeys;
}

type GameConfigExtended = Phaser.Types.Core.GameConfig & {
    winScore: number;
};
