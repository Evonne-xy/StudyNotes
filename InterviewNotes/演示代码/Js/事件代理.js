function bindEvent(element,type,selector, fn){
    if(fn == null){
        fn = selector;
        selector = null;
    }

    element.addEventListener(type, event => {
        target = event.target
        if(selector){
            if(target.matches(selector)){
                fn.call(target,event)
            }
        
        }
        else{
            fn.call(element,event)
        }
    })
        

}


const btn1 = document.getElementById('btn1');
bindEvent(btn1,'click', function(event)  {
    event.preventDefault()
    alert(this.innerHTML)
})


const div1 = document.getElementById('div1');
bindEvent(div1,'click', 'a', function(event) {
    event.preventDefault();
    alert(this.innerHTML);
})