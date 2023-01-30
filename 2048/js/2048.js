const span = document.querySelector('span')
const data = localStorage.getItem('LeaderBoards')
span.innerHTML = data ? data : 0
//获取所有格子放进数组
const divs = document.querySelectorAll('.box div')
const arr = [[],[],[],[]]
let num = 0
for (let i=0;i<arr.length;i++) {
    for (let j=0;j<arr.length;j++) {
        arr[i][j] = divs[num]
        num++
    }
}
// console.log(arr)
// 生成两个2或4
rand()
rand()
bgColor()


// 点击事件执行函数
const btn = document.querySelector('.button')
btn.addEventListener('click',function(e){
    switch(e.target.name){
        case 'left' :  end(); downLeft();bgColor();     break;//左
        case 'top' :  end(); downTop();bgColor();     break;//上
        case 'right' :  end(); downRight();bgColor();     break;//右
        case 'botton' :  end(); downBtn(); bgColor(); break;//下
        case 's' :  restart(); bgColor(); break;
    } 

})
//游戏重新开始的函数
function restart(){
    let sum = 0
    for(let i = 0;i <arr.length;i++){
        for(let j = 0;j <arr.length;j++){
            arr[i][j].innerHTML = "";
        }
    }
    rand()
    rand()
}

window.addEventListener('keyup',function(e){    
    console.log(e.key)
    switch(e.key){
    case 'ArrowLeft' :  end(); downLeft();bgColor();     break;//左
    case 'ArrowUp' :  end(); downTop();bgColor();     break;//上
    case 'ArrowRight' :  end(); downRight();bgColor();     break;//右
    case 'ArrowDown' :  end(); downBtn(); bgColor();     break;//下
} 

})
   


//开始生成随机位置，在该位置上生成随机2，2   Math.random()生成[0,1)的随机数
function rand() {
    const x = Math.floor(Math.random()*4)
    const y = Math.floor(Math.random()*4)
    if (arr[x][y].innerHTML) {
        rand()
    } else {
        arr[x][y].innerHTML = Math.random()>0.5 ? 2 : 2
    }
}
//判断游戏是否结束 判断是否有div为空

function end() {  
    var flag = true
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr.length;j++) {
            if (arr[i][j].innerHTML ==='') {
                flag = false
        }
    }
}
    if (flag) {
        fn()
    } else {
        rand()
    }
    
}
let sum = 0
function fn() {
    var flag = true
    //判断邻格有没有相同的数
    for(let i = 0;i < arr.length-1 ;i++){
        for(let j = 0;j< arr.length-1;j++){
            if(arr[i][j].innerHTML == arr[i][j+1].innerHTML || arr[i][j].innerHTML == arr[i+1][j].innerHTML || arr[i+1][j].innerHTML == arr[i+1][j+1].innerHTML || arr[i][j+1].innerHTML == arr[i+1][j+1].innerHTML  ){
                flag = false
            }
        }
    }
    if(flag){
        for(let i = 0;i < arr.length;i++){
            for(let j = 0;j< arr.length;j++){
        sum += +arr[i][j].innerHTML
            }}
        alert(`游戏结束！你的分数是：${sum}`)
        localStorage.getItem('LeaderBoards')
        span.innerHTML = data ? data : 0
        localStorage.setItem('LeaderBoards',sum)
        if (data>sum) {
            span.innerHTML = data
        } else {
            span.innerHTML = sum
            localStorage.setItem('LeaderBoards',sum)
        }
    }
}
//不同的数字添加不同的背景颜色

function bgColor(){
    for(let i = 0;i <arr.length;i++){
        for(let j = 0;j <arr.length;j++){
          
          switch(arr[i][j].innerHTML){
            case '2': arr[i][j].style.backgroundColor = "#EEE4DA" ;break;
            case '4': arr[i][j].style.backgroundColor = "#EDE0C8" ;break;
            case '8': arr[i][j].style.backgroundColor = "#F2B179" ;break;
            case '16': arr[i][j].style.backgroundColor = "#F59563" ;break;
            case '32': arr[i][j].style.backgroundColor = "#F67C5F" ;break;
            case '64': arr[i][j].style.backgroundColor = "#F65E3B" ;break;
            case '128': arr[i][j].style.backgroundColor = "#EDCF72" ;break;
            case '256': arr[i][j].style.backgroundColor = "#EDCC61" ;break;
            case '512': arr[i][j].style.backgroundColor = "#EDC850" ;break;
            case '1024': arr[i][j].style.backgroundColor = "yellowgreen" ;break;
            case '2048': arr[i][j].style.backgroundColor = "perple" ;break;
            default:  arr[i][j].style.backgroundColor = "#CDC1B4" ;break;     

          }
        }
    }

}
//上下左右执行函数
function downRight(){
    for(let i = 0;i <4;i++){
        for(let j = 0;j <4;j++){
            //先判断移动方向是否有空格 i列，j行
            if (j<3 && arr[i][j].innerHTML!=='' && arr[i][j+1].innerHTML==='') {
                arr[i][j+1].innerHTML = arr[i][j].innerHTML
                arr[i][j].innerHTML=''
                downRight()
            //判断移动方向邻格是否有相同的数字
            } else if (j<3 && arr[i][j].innerHTML!=='' && arr[i][j+1].innerHTML===arr[i][j].innerHTML) {
                arr[i][j+1].innerHTML *= 2
                arr[i][j].innerHTML=''
                downRight()
            }
        }
    }
}
function downLeft(){
    for(let i = 0;i <4;i++){
        for(let j = 0;j <4;j++){
            //先判断移动方向是否有空格 i列，j行
            if (j>0 && arr[i][j].innerHTML!=='' && arr[i][j-1].innerHTML==='') {
                arr[i][j-1].innerHTML = arr[i][j].innerHTML
                arr[i][j].innerHTML=''
                downLeft()
            //判断移动方向邻格是否有相同的数字
            } else if (j>0 && arr[i][j].innerHTML!=='' && arr[i][j-1].innerHTML===arr[i][j].innerHTML) {
                arr[i][j-1].innerHTML = arr[i][j].innerHTML*2
                arr[i][j].innerHTML=''
                downLeft()
            }
        }
    }
}
function downTop(){
    for(let i = 0;i <4;i++){
        for(let j = 0;j <4;j++){
            //先判断移动方向是否有空格 i列，j行
            if (i>0 && arr[i][j].innerHTML!=='' && arr[i-1][j].innerHTML==='') {
                arr[i-1][j].innerHTML = arr[i][j].innerHTML
                arr[i][j].innerHTML=''
                downTop()
            //判断移动方向邻格是否有相同的数字
            } else if (i>0 && arr[i][j].innerHTML!=='' && arr[i-1][j].innerHTML===arr[i][j].innerHTML) {
                arr[i-1][j].innerHTML = arr[i][j].innerHTML*2
                arr[i][j].innerHTML=''
                downTop()
            }
        }
    }
}
function downBtn(){
    for(let i = 0;i <4;i++){
        for(let j = 0;j <4;j++){
            //先判断移动方向是否有空格 i列，j行
            if (i<3 && arr[i][j].innerHTML!=='' && arr[i+1][j].innerHTML==='') {
                arr[i+1][j].innerHTML = arr[i][j].innerHTML
                arr[i][j].innerHTML=''
                downBtn()
            //判断移动方向邻格是否有相同的数字
            } else if (i<3 && arr[i][j].innerHTML!=='' && arr[i+1][j].innerHTML===arr[i][j].innerHTML) {
                arr[i+1][j].innerHTML = arr[i][j].innerHTML*2
                arr[i][j].innerHTML=''
                downBtn()
            }
        }
    }
}


