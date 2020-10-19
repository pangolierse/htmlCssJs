let lunboStart = (()=>{
  let lunboItem = document.querySelectorAll('#home .lunbo .content li')
  let lunboBtn = document.querySelectorAll('#home .lunbo .btn li')
  let lunbo = lunboItem[0].parentNode
  let nowPage = 0
  let oldPage = 0
  let lunboTimer = null

  lunbo.onmouseenter = function(){
    lunboStop()
  }
  lunbo.onmouseleave = function(){
    lunboStart()
  }
  function lunboStart(){
    clearInterval(lunboTimer)
    lunboTimer = setInterval(function(){
      oldPage = nowPage
      switchPage(nowPage+1)
    }, 2000)
  }
  for(let i = 0; i < lunboBtn.length; i++){
    lunboBtn[i].onclick = function(){
      clearClassName(lunboBtn)
      lunboStop(lunboStart)
      lunboBtn[i].className='active'
      switchPage(i,(confirmDirection(nowPage,i)))
      
    }
  }
  function lunboStop(callBack){
    clearInterval(lunboTimer)
    callBack && callBack()
  }
  function switchPage (nextPage, direction = 1) {
    nextPage = nextPage % lunboItem.length
    switch (direction) {
      case 1:
        lunboItem[nowPage].className = 'left-hide'
        lunboItem[nextPage].className = 'right-show active'
        break;
      case -1:
        lunboItem[nowPage].className = 'right-hide'
        lunboItem[nextPage].className = 'left-show active'
        break;
    }
    clearClassName(lunboBtn)
    lunboBtn[nextPage].className = 'active'
    nowPage = nextPage 
  }
  function clearClassName (eles) {
    for(let i = 0; i < eles.length; i++){
      eles[i].className = ''
    }
  }
  function confirmDirection(prev,now){
    return now>prev ? 1:(prev == now ? 0 : -1)
  }
  return lunboStart
})()
export {lunboStart}