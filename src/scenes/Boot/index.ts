import { BASE_URL, PATH_URL } from '@/const'
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  init() {
    const designSize: any = this.sys.game.config // 750 1334 *
    const boundsSize = this.scale.canvasBounds // 456 812 -41
    window.boundsXY = {
      x: (designSize.width / boundsSize.width) * -boundsSize.x,
      y: (designSize.height / boundsSize.height) * -boundsSize.y
    }

  }

  preload() {
    // this.load.setBaseURL(BASE_URL)
    // this.load.setPath(PATH_URL)
    // this.load.image('bg', 'images/bg.jpg')
    // 加载字体
  }

  create() {
    console.log('boot create...')
    this.scene.start('PreloaderScene')
    // console.log('2...')
    // this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
