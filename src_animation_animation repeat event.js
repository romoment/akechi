class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        
        this.load.spritesheet('mummy', 'https://uc457fb0dd3780b28293ffa90559.dl.dropboxusercontent.com/cd/0/inline/BeC78lyv9PxWIh-sCBf90kHBstf8jp4A7EGqP9PDfO2GT2VCzwBr4gLfhn-uaINlolZxD5cEht7D9nK0aYGnnqmYi8MxMFgw5CedfMTwg4NgO1UOJr4BMLYce5ri3Ef8lLsr5LAXgz2_WvHiBZB8ch22/file#', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        const mummyAnimation = this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mummy'),
            frameRate: 8
        });

        const sprite = this.add.sprite(50, 300, 'mummy').setScale(4);

        sprite.play({ key: 'walk', repeat: 14 });

        this.tweens.add({
            targets: sprite,
            x: 750,
            duration: 8800,
            ease: 'Linear'
        });

       
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [ Example ]
};

const game = new Phaser.Game(config);
