import { BASE_URL, PATH_URL } from '@/const'
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
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
