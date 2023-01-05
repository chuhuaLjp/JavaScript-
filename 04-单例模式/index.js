//保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。

//如何才能保证一个类仅有一个实例？
//一般情况下，当我们创建了一个类（本质是构造函数）后，可以通过new关键字调用构造函数进而生成任意多的实例对象。像这样：

class SingleDogOne {
  show() {
    console.log("我是一个单例对象");
  }
}

const s1 = new SingleDogOne();
const s2 = new SingleDogOne();

//而单例模式想要做到的是，不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例。
//那就需要构造函数具备判断自己是否已经创建过一个实例的能力：

class SingleDogTwo {
  show() {
    console.log("我是一个单例对象");
  }
  static getInstanceOne() {
    if (!SingleDogTwo.instance) {
      SingleDogTwo.instance = new SingleDogTwo();
    }
    return SingleDogTwo.instance;
  }
  //除了楼上这种实现方式之外，getInstance的逻辑还可以用闭包来实现：
  static getInstanceTwo = (function () {
    let instance = null;
    return function () {
      if (!instance) {
        instance = new SingleDogTwo();
      }
      return instance;
    };
  })();
}

const s3 = SingleDogTwo.getInstanceOne();
const s4 = SingleDogTwo.getInstanceOne();

const s5 = SingleDogTwo.getInstanceTwo();
const s6 = SingleDogTwo.getInstanceTwo();

console.log(s3 === s4); //true
console.log(s5 === s6);
