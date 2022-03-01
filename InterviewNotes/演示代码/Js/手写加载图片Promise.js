const imgUrl = 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'


function loadImg(src){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = src
        img.onload = () => {
            resolve(img);
        }

        img.onerror = () => {
            reject(new Error(`image failed ${src}`))
        }
    })

}


loadImg(imgUrl).then((img)=> {
    console.log(img.width)
    console.log(img.height)
}).catch((err) => {
    console.log(err)
})


// async function useLoadImg(){
//     const img = await loadImg(imgUrl)
//     console.log('imgHeight' + img.height)
// }

// useLoadImg()
