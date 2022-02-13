## apply call bind区别

```js
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}



person.hello("world");  // output: "James Smith says hello world"



const helloFunc = person.hello.bind({name:'Jim Smith'}, "world","Mars")
helloFunc() // // output: "Jim Smith says hello world Mars"
```

用bind当你希望以后你可以再上下文中调用函数，可以使用bind
当你想及时调用的时候 call apply可以使用

apply和call相似，但是不同的是apply是接受一个类似数组对象，而不是一次列出一个参数

CALL 使用方法

```js
var person = {  
  name: "James Smith",
  hello: function(thing1,thing2) {
    console.log(this.name + " says hello " + thing1 + thing2);
  }
}

var thing = ['world','Mars']
person.hello.call({ name: "Jim Smith" }, thing[0],thing[1]); // output: "Jim Smith says hello world Mars"

```

APPLY使用方法
```js
var person = {  
  name: "James Smith",
  hello: function(thing1,thing2) {
    console.log(this.name + " says hello " + thing1 + thing2);
  }
}

var thing = ['world','Mars']
person.hello.apply({ name: "Jim Smith" }, thing); // output: "Jim Smith says hello world Mars"

```

