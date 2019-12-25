import { BASE_URL, PATH_URL } from '@/const'
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  init() {
    const designSize: any = this.sys.game.config // 750 1334 *
    const boundsSize = this.scale.canvasBounds // 456 812 -41
    const parentSize = this.scale.parentSize
    const boundsScale = {
      scaleX: designSize.width / boundsSize.width,
      scaleY: designSize.height / boundsSize.height
    }
    this.sys.game.adapter = {
      x: boundsScale.scaleX * -boundsSize.x,
      y: boundsScale.scaleY * -boundsSize.y,
      boundsSize,
      parentSize,
      scaleX: parentSize.width / boundsSize.width,
      scaleY: parentSize.height / boundsSize.height,
      container: {
        width: boundsScale.scaleX * parentSize.width,
        height: boundsScale.scaleY * parentSize.height
      }
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
