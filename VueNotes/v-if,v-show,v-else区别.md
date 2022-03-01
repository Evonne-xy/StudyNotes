## v-if v-else-if  v-else v-show

v-if 里可以写判断语句，只要他的返回结果为 true 就可以

v-if v-else的用法：可以使用变量，也可以使用===表达式

v-show通过display：none不显示，但还是要渲染


应用场景：

v-if 一次性 不需要频繁切换节点 因为增加减少 element 会影响到 performance

v-show 适用于频繁切换节点

```html
<template>
    <div>
        <p v-if="type === 'a'">A</p>
        <p v-else-if="type === 'b'">B</p>
        <p v-else>other</p>

        <p v-show="type === 'a'">A by v-show</p>
        <p v-show="type === 'b'">B by v-show</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: 'a'
        }
    }
}
</script>
```
