import { BASE_URL, PATH_URL } from '@/const'
export default class HomeScene extends Phaser.Scene {
  config: any
  adapter: any
  container: any
  constructor() {
    super('HomeScene')
  }

  init() {
    this.config = this.sys.game.config
    this.adapter = this.sys.game.adapter
    this.container = this.add
      .container(this.adapter.x, this.adapter.y)
      .setSize(this.adapter.container.width, this.adapter.container.height)
  }

  create() {
    // this.add.image(0, 0, 'bg').setOrigin(0)

    console.log(this.adapter)

    const test = this.add
      .image(0, 0, 'test')
      .setOrigin(0)
      .setScale(Math.min(this.adapter.scaleX, this.adapter.scaleY))

    this.container.add([test])
    // this.add.image(0, this.config.height, 'home_bottom').setOrigin(0, 1)

    // const home_box = this.add
    //   .image(0, 0, 'home_box')
    //   .setOrigin(0.5, 0)
    //   .setScale(this.adapter.scale)

    // const container = this.add.container(
    //   this.config.width * 0.5,
    //   -home_box.height
    // )

    // // console.log(home_box)
    // // console.log(window.boundsXY)
    // const birdImage = this.add.image(0, 0, 'bird').setOrigin(0)
    // const xxContainer = this.add.container(
    //   -this.config.width * 0.5 + window.boundsXY.x,
    //   home_box.displayHeight - birdImage.height + 30
    // )
    // xxContainer.add(birdImage)

    // container.add([home_box, xxContainer])
    // container.setDepth(100)

    // this.tweens.add({
    //   targets: container,
    //   y: window.boundsXY.y,
    //   duration: 1500,
    //   ease: 'Bounce.easeOut'
    // } as any)

    // this.add
    //   .image(
    //     200 + window.boundsXY.x,
    //     this.config.height - window.boundsXY.y,
    //     'home_number1'
    //   )
    //   .setOrigin(0.5, 1)
    // this.add
    //   .image(
    //     this.config.width - window.boundsXY.x,
    //     300 - window.boundsXY.y,
    //     'home_number2'
    //   )
    //   .setOrigin(1, -1)
  }
}
