export default class ListScene extends Phaser.Scene {
  config: any
  adapter: any
  container: any
  size: any

  constructor() {
    super('ListScene')
  }

  init() {
    this.config = this.sys.game.config
    this.adapter = this.sys.game.adapter
    this.size = {
      width: 200,
      height: 210
    }
    this.container = this.add
      .container(this.adapter.x, this.adapter.y)
      .setSize(this.adapter.container.width, this.adapter.container.height)
      .setDepth(9)
  }

  create() {
    this.add.image(0, 0, 'list_bg').setOrigin(0)

    const list_tree_bottomleft = this.add.image(0, this.container.height, 'list_tree_bottomleft').setOrigin(0, 1)
    const list_tree_bottomright = this.add.image(this.container.width, this.container.height, 'list_tree_bottomright').setOrigin(1)
    const list_tree_topright = this.add.image(this.container.width, 0, 'list_tree_topright').setOrigin(1, 0)

    const title_text = this.add.text(this.container.width * 0.5, 130, '请选择关卡', {
      fontSize: 60
    }).setOrigin(0.5)

    const itemContainer = this.add.container(this.container.width * 0.5 - this.size.width, this.container.height * 0.5 - this.size.width)
    const itemGroup = this.add.group({
      key: 'list_item',
      repeat: 8
    } as any)

    Phaser.Actions.GridAlign(itemGroup.getChildren(), {
      width: 3,
      height: 3,
      position: Phaser.Display.Align.CENTER,
      cellWidth: this.size.width,
      cellHeight: this.size.height,
    })

    itemContainer.add(itemGroup.getChildren())

    this.container.add([list_tree_bottomleft, list_tree_bottomright, list_tree_topright, title_text, itemContainer])

  }
}
