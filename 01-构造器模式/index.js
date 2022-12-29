//员工信息录入系统
const ljp = {
  name: "林俊鹏",
  age: 21,
  career: "coder",
};

const hmm = {
  name: "韩梅梅",
  age: 22,
  career: "product manager",
};

//现在要你加上500个人，是要重复干500次复制粘贴吗？
//No!! 我有构造函数
function User(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
}

const UserList = [];

//模拟调用接口返回，生成500个user
async function generator(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

generator("www.baidu.com").then((res) => {
  res.forEach((element) => {
    const { name, age, career } = element;
    const user = new User(name, age, career);
    UserList.push(user);
  });
});

console.log(UserList);

//总结：使用构造函数去初始化对象，就是应用了构造器模式，在上面这个例子中，500个人不变的共性是：
//都具有name,age，career这三个属性
//500个人变的个性：是这三个属性值
//所以我们上面这个函数，确保了500人共性的不变以及个性的灵活
