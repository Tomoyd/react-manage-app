// 在node.js中全局对象是global,所有全局变量都是global对象的属性

// global 根本作用是作为全局变量的宿主,满足以下条件成为全局变量
/**
 * 最外层定义的变量
 * 全局对象的属性
 * 隐式定义的变量
 * nodejs不可能在最外层定义变量，所有的代码都属于当前模块的，模块本省不是最外层上下文
 */
