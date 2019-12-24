import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config: any = {
  type: Phaser.AUTO,
  transparent: true,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'app',
    width: 750,
    height: 1334
  },
  autoRound: true,
  scene
}

new Phaser.Game(config)
