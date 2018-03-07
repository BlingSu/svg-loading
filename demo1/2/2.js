/*
 * @author: angelasu
 * @date: 2018/03/06
 * @description: 封装-继承-多态
 */

/**
 * 封装
 */

// var Book = function(id, bookname, price) {
//   this.id = id
//   this.bookname = bookname
//   this.price = price
// }

/**
 * 也可以通过在类的原型上添加
 * 1. 原型对象属性赋值
 * 2，将一个对象赋值给类的原型对象
 */

// Book.prototype.display = function() {
  // console.log('show this book')
// }
/**
 * 或者
 */
// Book.prototype = {
  // display: function() {}
// }

// var book = new Book(1, 'book', '20')

// console.log(book.price)

/**
 * 属性与方法封装
 * 私有属性和方法: 声明在函数内部的变量以及方法在外界访问不到
 * 对象公有属性和方法: 函数内部通过this创建的属性和方法，在类创建对象时，每个对象自身都拥有一份可以在外部访问到
 * 特权方法: 通过this创建的方法，可以访问对象的公友属性和方法，还能访问类创建时自身的私有属性和私有方法
 * 构造器: 初始化，创建对象时调用特权方法可以看作是类的构造器
 */

// var Book = function(id, name, price) {
//   // 私有属性
//   var num = 1

//   // 私有方法
//   function checkId() {}

//   // 特权方法
//   this.getName = function() {}
//   this.getPrice = function() {}
//   this.setName = function() {}
//   this.setPrice = function() {}

//   // 对象公有属性
//   this.id = id

//   // 对象公有方法
//   this.copy = function() {}

//   // 构造器
//   this.setName(name)
//   this.setPrice(price)
// }


/**
 * 通过new关键字创建新对象时，由于外面通过点语法添加的属性和方法是由执行，所有新创建的对象中是无法获取的，可以通过类来使用。因此外面通过点定义的方法和属性就是类的静态公有属性和公邮方法。而通过prototype创建的在类实例的对象中可以通过this来访问，即prototype对象中的属性和方法称为公有属性和公有方法
 */


// // 类静态公有属性(对象不能访问)
// Book.isChinese = true

// // 类静态公有方法(对象不能访问)
// Book.restTime = function() {
//   console.log('new time')
// }

// Book.prototype = {
//   // 公有属性
//   isBook: false,
//   // 公有方法
//   display: function() {}
// }


// var test = new Book(1, '书本', 77)

// console.log(test.isChinese)
// console.log(test.isBook)
// console.log(test.bookname)


/**
 * 闭包实现 (类的静态变量)
 */

// 利用闭包实现
// var Book = (function() {
//   // 静态私有变量
//   var bookName = 0

//   // 静态私有方法
//   function checkBook(name) {}

//   // 返回构造函数
//   return function(mewId, newName, newPrice) {
//     // 私有变量
//     var name, price
//     // 私有方法
//     function checkId(id) {}

//     // 特权方法
//     this.getName = function() {}
//     this.getPrice = function() {}
//     this.setName = function() {}
//     this.setPrice = function() {}

//     // 公有属性
//     this.id = newId
//     // 公有方法
//     this.copy = function() {}
//     bookName++
//     if (bookName > 100)
//       throw new Error(`超过100了`)

//     // 构造器
//     this.setName(name)
//     this.setPrice(price)
//   }
// })()


/**
 * 在闭包外部添加原型属性和方法感觉很像脱离了闭包这个类，所以在闭包内部实现一个完成的类然后将其返回
 */

// var Book = (function() {
//   var bookNum = 0
//   function checkBook(name) {}

//   function book(newId, newName, newPrice) {
//     var name, price
//     function checkId(id) {}

//     this.getName = function() {}
//     this.getPrice = function() {}
//     this.setName = function() {}
//     this.setPrice = function() {}

//     this.id = newId
//     this.copy = function() {}
//     bookName++
//     if (bookName > 100)
//       throw new Error('book > 100')
//     this.setName(name)
//     this.setPrice(price)
//   }
//   //  构造原型
//   _book.prototype = {
//     // 静态公有属性
//     isBook: false,
//     // 静态公有方法
//     display: function() {}
//   }
//   // 返回类
//   return _book
// })()


/**
 * 创建对象的安全模式(检测是否犯错)
 */

// 图书类
// var Book = function(title, time, type) {
//   // 判断this是否只想当前这个对象
//   if (this instanceof Book) {
//     this.title = title
//     this.time = time
//     this.type = type
//   } else {
//     return new Book(title, time, type)
//   }
// }

// // 实例化一本书
// var book = Book('javascript', '2018', 'js')
// console.log(book)



/**
 * 继承->类式继承
 * 类都有3个部分:
 * 1. 第一部分是构造函数内的，供实例化对象复制用的
 * 2. 第二部分是构造函数外的，通过点语法添加，供类使用，实例化访问不到
 * 3. 第三部分是原型中的，实例化对象可以用过原型链间接访问到，也是为供所有实例化对象所共有的
 */

// 类式继承, 声明父类
// function SuperClass() {
//   this.superValue = true
// }

// // 为父类添加公有方法
// SuperClass.prototype.getSuperValue = function() {
//   return this.superValue
// }

// // 声明子类
// function SubClass() {
//   this.subValue = false
// }

// // 继承父类
// SubClass.prototype = new SuperClass()
// // 为子类添加公有方法
// SubClass.prototype.getSubValue = function() {
//   return this.subValue
// }

// var test = new SubClass()
// console.log(test.getSuperValue())
// // instanceof 检测某个对象是否是某个类的实例
// console.log(subClass instanceof SuperClass)  // false
// console.log(subClass.prototype instanceof SuperClass)  // true



/**
 * 构造函数继承
 */

// 声明父类
// function SuperClass(id) {
//   // 引用类型共有属性
//   this.books = ['js', 'html', 'css']
//   // 值类型共有属性
//   this.id = id
// }

// // 父类声明原型方法
// SuperClass.prototype.showBooks = function() {
//   console.log(this.books)
// }
// // 声明子类
// function SubClass(id) {
  /**
   * 继承父类
   * call 可以更改函数的作用环境，可以将子类中的变量在父类执行一遍。故而继承父类的共有属性。
   * 这类的继承没有涉及prototype所以父类的原型方法不会被子类继承，所以必须放在构造函数里面，如果这样，创建出来的每个实例都不会共用，而是单独一份。
   */
//   SuperClass.call(this.id)
// }

// // 创建第一个子类的实例
// var test1 = new SubClass(10)
// // 创建第二个子类的实例
// var test2 = new SubClass(20)

// test1.books.push('设计模式')

// console.log(test1.books)


/**
 * 组合继承
 * 优点: 融合类式继承和构造函数继承的优点
 * 缺点: 使用构造函数继承时执行了一遍父类的构造函数，子类原型的类式继承又调用了一次
 */

// 组合式继承 声明父类
// function SuperClass(name) {
//   // 值类型共有属性
//   this.name = name
//   this.books = ['html', 'css', 'javascript']
// }
// // 父类原型共有方法
// SuperClass.prototype.getName = function() {
//   console.log(this.name)
// }
// // 声明子类
// function SubClass(name, time) {
//   // 构造函数式继承父类name属性
//   SuperClass.call(this, name)
//   // 子类中新增共有属性
//   this.time = time
// }
// // 类式继承 子类原型继承父类
// SubClass.prototype = new SuperClass()
// // 子类原型方法
// SubClass.prototype.getTime = function() {
//   console.log(this.time)
// }

// var test = new SubClass('js book', 2014)
// test.books.push('设计模式')
// console.log(test.getTime())


/**
 * 原型式继承
 */
