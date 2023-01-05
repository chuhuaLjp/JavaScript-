/**
 *实现Storage，使得该对象为单例，基于 localStorage 进行封装。
 实现方法 setItem(key,value) 和 getItem(key)。
 *
 */
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();
storage1.setItem("name", "Ljp");
console.log(storage1.getItem("name"));
console.log(storage2.getItem("name"));

//闭包版本

class StorageTwo {
  static getInstance = (function (name) {
    let instance;
    return function () {
      if (!instance) {
        instance = new StorageTwo();
      }
      return instance;
    };
  })();
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

console.log(StorageTwo.getInstance());
