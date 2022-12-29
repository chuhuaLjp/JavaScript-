//现在假设的是数据库会返回name age career字段，work字段需要自己去根据career判断

//方式一：单个构造器模式
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.wordk = work; //work字段是共性，但是不能全部放在构造器里面了，因为work字段需要自己匹配
}

//方式二：工厂模式
function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = "coder";
  this.work = ["写代码", "写系分", "修Bug"];
}

function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = "product manager";
  this.work = ["订会议室", "写PRD", "催更"];
}

function FactoryOne(name, age, career) {
  switch (career) {
    case "coder":
      return new Coder(name, age);
      break;
    case "product manager":
      return new ProductManager(name, age);
      break;
    //这里还有很多case.....
    default:
      break;
  }
  return;
}

function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function FactoryTwo(name, age, career) {
  let work;
  switch (career) {
    case "coder":
      work = ["写代码", "写系分", "修Bug"];
      break;
    case "product manager":
      work = ["订会议室", "写PRD", "催更"];
      break;
    case "boss":
      work = ["喝茶", "看报", "见客户"];
    case "xxx":
    // 其它工种的职责分配 ...
  }
  return new User(name, age, career, work);
}
