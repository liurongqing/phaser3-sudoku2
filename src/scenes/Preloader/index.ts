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
    this.load.image('home_bottom', 'images/home_bottom.png')
    this.load.image('home_number1', 'images/home_number1.png')
    this.load.image('home_number2', 'images/home_number2.png')
    this.load.image('bird', 'images/bird.png')
    this.load.image('green_button', 'images/green_button.png')
    this.load.image('orange_button', 'images/orange_button.png')
    this.load.image('list_bg', 'images/list_bg.jpg')
    this.load.image('list_tree_bottomleft', 'images/list_tree_bottomleft.png')
    this.load.image('list_tree_bottomright', 'images/list_tree_bottomright.png')
    this.load.image('list_tree_topright', 'images/list_tree_topright.png')
    this.load.image('list_item', 'images/list_item.png')
    // this.load.image('test', 'images/test.png')
  }

  create() {
    console.log('preloader create...')
    this.scene.start('HomeScene')
    // console.log('2...')
    // this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
