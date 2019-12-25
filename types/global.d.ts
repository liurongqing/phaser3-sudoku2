interface Window {
  [propName: string]: any
}

declare namespace Phaser {
  // // 给类原型加
  // namespace Game {
  //   export let x:any
  // }
  // 给对象属性
  interface Game {
    // [propName: string]: any
    adapter: Object
  }
}
