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
      .setDepth(9)
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0)

    const home_box = this.add
      .image(0, 0, 'home_box')
      .setScale(this.adapter.scale)
      .setOrigin(0.5, 0)

    const text = this.add
      .text(0, home_box.displayHeight * 0.25, '数独', {
        fontSize: 130
      })
      .setOrigin(0.5, 0.5)

    const boxContainer = this.add.container(
      this.container.width * 0.5,
      -home_box.displayHeight
    )

    const birdImage = this.add
      .image(-this.container.width, home_box.displayHeight + 50, 'bird')
      .setOrigin(0, 1)
      .setScale(this.adapter.scale)

    // 经典数独
    const classicContainer = this.add.container(0, home_box.displayHeight * 0.5)
    const classicButton = this.add.sprite(0, 0, 'green_button').setInteractive()
    const classicText = this.add
      .text(0, 0, '经典数独', {
        fontSize: 46
      })
      .setOrigin(0.5)

    // 我的数独
    const customContainer = this.add.container(0, home_box.displayHeight * 0.7)
    const customButton = this.add.sprite(0, 0, 'orange_button').setInteractive()
    const customText = this.add
      .text(0, 0, '我的数独', {
        fontSize: 46
      })
      .setOrigin(0.5)

    classicContainer.add([classicButton, classicText])
    customContainer.add([customButton, customText])

    boxContainer.add([
      home_box,
      birdImage,
      text,
      classicContainer,
      customContainer
    ])

    this.add.image(0, this.config.height, 'home_bottom').setOrigin(0, 1)

    this.tweens.add({
      targets: boxContainer,
      y: 0,
      duration: 1200,
      ease: 'Bounce.easeOut',
      onComplete: () => {
        this.tweens.add({
          targets: birdImage,
          x: -this.container.width * 0.5,
          duration: 500,
          ease: 'Quad.easeIn'
        })
      }
    })

    const home_number1 = this.add
      .image(-100, this.container.height * 0.5, 'home_number1')
      .setOrigin(0.5, 1)

    const home_number2 = this.add
      .image(this.container.width * 0.5, -120, 'home_number2')
      .setOrigin(1)

    const numberContainer = this.add.container(
      this.container.width * 0.5,
      this.container.height * 0.5
    )

    classicButton.once('pointerdown', () => {
      this.tweens.add({
        targets: classicContainer,
        scale: 0.7,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          // console.log('2...')
          this.scene.start('ListScene')
        }
      })
    })

    customButton.once('pointerdown', () => {
      this.tweens.add({
        targets: customContainer,
        scale: 0.7,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          console.log('2...')
        }
      })
    })

    numberContainer.add([home_number1, home_number2])
    this.container.add([boxContainer, numberContainer])

    // this.scene.start('ListScene')
  }
}
