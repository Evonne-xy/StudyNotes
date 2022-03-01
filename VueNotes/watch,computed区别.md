### computed

这个 function 调用仅仅是依赖的响应式 只有当 property 变化时才会重新计算
这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

computed VS methods
如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。

不加括号，因为这里面意义上不是 function。不要把所有的方法都写进 method 里，除非你的 value 是只要 page 变化了，他的 value 也要变化
为了提高性能

```javascript
<p>Your name: {{outPutFullName}}</p>

computed{
    outPutFullName(){
        ......
    }
}

```

### Watch

他会 excuted automatically by Vue 当这个 name property changes.

什么时候使用：当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

name(value) watcher function 可以得到 last value

<mark>注意：</mark>
watch监听引用类型，需深度监听。deep:true,且拿不到old value

```javascript
data() {
        return {
            name: '双越',
            info: {
                city: '北京'
            }
        }
    },
    watch: {
        name(oldVal, val) {
            // eslint-disable-next-line
            console.log('watch name', oldVal, val) // 值类型，可正常拿到 oldVal 和 val
        },
        info: {
            handler(oldVal, val) {
                // eslint-disable-next-line
                console.log('watch info', oldVal, val) // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
            },
            deep: true // 深度监听
        }
    }

```



## watch VS computed

Computed
Vue automatically evaluates its value every time one of its dependencies is changed. 注意是：dependency 改变

适合用在：need to calculate a value based on other properties

```javascript
computed: {
  total() {
    return this.price * this.quantity;
  }
}
```

Watch
A watcher is basically a function that Vue automatically executes when the watched property changes. 只能是单一的值

适合用在 HTTP calls, watch a data property until it reaches a specific value, and only then do something

上面的例子写下来就是这样的

```javascript
watch:{
  price(val){
    this.total = val * quantity
  }
  quantity(val){
    this.total = val * price
  }
}
```

1. HTTP calls

```javascript
export default {
  data() {
    return {
      actorId: null,
      movies: [],
    };
  },
  methods: {
    getMovies() {
      axios.get("movies/actor/${this.actorId}").then((resp) => {
        this.movies = resp.data;
      });
    },
  },
  watch: {
    actorId(val) {
      if (val) this.getMovies();
    },
  },
};
```

2.

```javascript
watch: {
  quantity(val) {
    if (val > this.stock) {
      this.error = true;
      this.errorMessage = `We only have ${this.stock} units`;
    }
  },
}
```

|                    Methods                    |                   Computed                    |                       Watch                        |
| :-------------------------------------------: | :-------------------------------------------: | :------------------------------------------------: |
|         Event binding & data Binding          |                 data binding                  |           Not used directly in template            |
| Data Binding: Methods 会被 excuted 每一次渲染 | computed property 会被执行当他的 value 改变了 | 允许你执行 code 当有些 data 改变了（Http request） |
|  使用：当你的事件和数据每时每刻都需要被执行   |     使用：当你的使用的数据依赖其他的数据      |           使用：当你的数据需要不断的变化           |
