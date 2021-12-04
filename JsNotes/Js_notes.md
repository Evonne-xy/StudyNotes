# Javascript Notes

---
##  some() every() find()区别

```js
var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];
```

### some() 是用来确定这个数组里是否有一个或者多个值与你想找的内容匹配

例如下面这个，我需要找到这个ARRAY中是否有pilot


```js
var ifExistPilot = operatives.some(function(operative){ 
    return operative.pilot;
} )
```
这就是将operatives作为一个参数，查看是否有pilot，该函数必须返回一个BOOLEAN值，只要返回一个true, some()就会返回true,如果没有一个值返回true,那么some()返回false
some()不会执行完，例如这个例子，他只会执行到第二条。


### every() 也可以检查数组中是否有匹配的项，但是不同的是，只有每个匹配的项都是true，才会返回true


### find() 会返回符合条件的第一个值，注意是值不是bolean值

和前面一样，这次我不想找是否有飞行员，这次需要的是这pilot的信息

```js
var ifExistPilot = operatives.find(function(operative){
    return operative.pilot;
})
```
代码和some()的完全相同，区别是find返回的是一个具体的值，而不是bolean值。find()将返回第一个匹配的值，尽管下面依旧有匹配的项，如果项返回所有符合条件的值，则需要用filter。


---
## map() reduce() filter() 区别

```js
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]
```

如果使用forEach

```js
var officerId = [];
officers.forEach(function(officer){
    officerId.push(officer.id);
})

```
可以观察到这里需要建立一个空的数组
### map() 

```js
const officerId = officers.map(officer => officer.id);
```
那map()如何工作？他有两个参数，一个是回调，还有一个是可选的上下文，回调函数将会针对officers这个数组每个值运行，并且返回结果数组的每个值。



### reduce()
就像map()一样，reduce也会对数组每个元素进行回调，但是不同的是：这个回调函数中有一个accumulator（累加器）的结果，会从一个元素传递到另外一个

```JS
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];
```
想要计算整个年限
```js
const totalYear = pilots.reduce(function(accumulator, pilot){
    return accumulator + pilot.years. //值为14+30+16+22 = 82
},0)
```

注意这里设置的初始值为0，对每个元组进行回调后，reduce会将累加器的值传递给下一个，最后返回最终的累加器的值。

想要得出，最有经验的pilot

```JS
const experiencedPilot = pilots.reduce(function(oldest,pilot){
    return oldest.years > pilot.years? oldest: pilot;
})
```

将oldest作为累加器，回调会将整个累加器与每个元素进行对比，如果对比的这pilot years > 前面那个，就把他赋值给当前的累加器。


## filter() 有一个数组，只需要返回其中的一些元素

```js
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];
```
现在需要两组，一组的faction是empire，一组是rebels

```js
var empire = pilots.filter(pilot => pilot.faction === 'empire');
```

如果这个回调函数返回true,则当前元素会保存到这个empire数组中。











