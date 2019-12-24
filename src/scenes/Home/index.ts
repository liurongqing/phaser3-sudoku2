import { BASE_URL, PATH_URL } from '@/const'
export default class HomeScene extends Phaser.Scene {
  config: any
  constructor() {
    super('HomeScene')
  }

  init() {
    this.config = this.sys.game.config
  }

  create() {
    console.log('home create...')
    this.add.image(0, 0, 'bg').setOrigin(0)
    const home_box = this.add.image(0, 0, 'home_box').setOrigin(0)
    home_box.setPosition((this.config.width - home_box.width) * 0.5, 0)
    console.log(home_box.width)
  }
}
