import { BASE_URL, PATH_URL } from '@/const'
export default class HomeScene extends Phaser.Scene {
  config: any
  boundsXY: any
  constructor() {
    super('HomeScene')
  }

  init() {
    this.config = this.sys.game.config
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0)
    this.add.image(0, this.config.height, 'home_bottom').setOrigin(0, 1)

    const home_box = this.add
      .image(0, 0, 'home_box')
      .setOrigin(0.5, 0)
      .setScale(this.scale.parentSize.width / this.scale.canvasBounds.width)

    const container = this.add.container(
      this.config.width * 0.5,
      -home_box.height
    )

    console.log(home_box)
    console.log(window.boundsXY)
    const birdImage = this.add.image(0, 0, 'bird').setOrigin(0)
    const xxContainer = this.add.container(
      -this.config.width * 0.5 + window.boundsXY.x,
      home_box.displayHeight - birdImage.height + 30
    )
    xxContainer.add(birdImage)

    container.add([home_box, xxContainer])
    container.setDepth(100)

    this.tweens.add({
      targets: container,
      y: window.boundsXY.y,
      duration: 1500,
      ease: 'Bounce.easeOut'
    } as any)

    this.add
      .image(
        200 + window.boundsXY.x,
        this.config.height - window.boundsXY.y,
        'home_number1'
      )
      .setOrigin(0.5, 1)
    this.add
      .image(
        this.config.width - window.boundsXY.x,
        300 - window.boundsXY.y,
        'home_number2'
      )
      .setOrigin(1, -1)
  }
}
