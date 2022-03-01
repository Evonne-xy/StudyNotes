//创建十个a标签，点击的时候弹出来对应的序号

function fun(){

    for(let i=0;i<10;i++){
        const frameA = document.createElement('a')
        frameA.innerHTML = i + '<br>'
        frameA.addEventListener('click',function(e){
            // e.preventDefault()
            alert(i)
        })
        document.body.appendChild(frameA)
    }
} 

fun()