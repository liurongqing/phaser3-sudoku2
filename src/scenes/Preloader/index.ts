import { BASE_URL, PATH_URL } from '@/const'
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('bg', 'images/bg.jpg')
    this.load.image('home_box', 'images/home_box.png')
  }

  create() {
    console.log('preloader create...')
    this.scene.start('HomeScene')
    // console.log('2...')
    // this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
