## 使用XMLHttpRequest发get请求

```js
const xhr = new XMLHttpRequest()
xhr.open('GET', '/api',true) //true异步请求
xhr.onreadystatechange =function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            alert(xhr.responseText);
        }
    }
}
xhr.send(null)
```

## 使用XMLHttpRequest发post请求

```js
const xhr = new XMLHttpRequest()
xhr.open('POST','/login',true)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            alert(xhr.responseText)
        }
    }
}

const postData = {
    userName:'Evonne'
}

xhr.send(JSON.stringify(postData))
```

## xhr.readyState

- 0 未初始化，还没有调用send()方法
- 1 载入 已调入send()方法，正在发送请求
- 2 载入完成，send()方法执行完成，已经接受全部内容
- 3 交互 正在解析相应内容
- 4 响应内容解析完成，可以在客户端调用

## xhr.status

- 2xx 表示成功处理请求 200
- 3xx 需要重定向，浏览器直接跳转
- 4xx 客户端请求错误 404 403 
- 5xx 服务器错误


## promise版 ajax发送请求
```js
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error("404"));
        }
      }
    };
  });
  return p;
}


const url = "data.json";
ajax(url)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
```



