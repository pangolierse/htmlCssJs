
import animation from "./moveInOut";
// 头部导航点击切换效果实现
(() => {
  //头部导航栏元素获取
  let arrow = document.querySelector('#head .head-main .arrow')
  let headNavFItem = document.querySelectorAll('#head .head-main .head-nav > li')
  let headNavItem = document.querySelectorAll('#head .head-main .head-nav > li a')
  let rightNav = document.querySelectorAll('#content .right-nav li')
  let navItemUp = document.querySelectorAll('#head .head-main .head-nav > li a > .up')
  let navItemDown = document.querySelectorAll('#head .head-main .head-nav > li a > .down')
  // 主题内容获取
  let contentView = document.querySelector('#content .list ')
  let contentMain = document.querySelectorAll('#content .list > li')
  //当前页面参数
  let now = 0
  let old = 0
  //滚动定时
  let scrollTimer = null
  let liDetial = headNavFItem[0]
  //初始化页面状态
  animation.forEach(ele => {
    ele.out()
  });

  for(let i = 0; i < headNavItem.length; i++){
    let node = headNavItem[i]
    node.onclick = () => {
      contentMove(i)
    }
  }
  // headNavItem[0].click()
  contentView.addEventListener('DOMMouseScroll', function(ev){
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(()=>{
      fn(ev)
    },200)
  })
  contentView.onmousewheel = function(ev){
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(()=>{
      fn(ev)
    },200)
  }
  function fn(ev){
    let dir
    if(ev.wheelDelta)
      dir = ev.wheelDelta > 0? 'up':'down'
    else if(ev.detail) 
      dir = ev.detail < 0? 'up':'down'
    old = now
    switch(dir){
      case 'up':
        now = now <= 0 ? 0:--now
        break;
      case 'down':
        now = now >= contentMain.length-1 ? contentMain.length-1 : ++now
        break;
    }
    contentMove(now)
  }
  window.onresize = ()=>{
    contentMove(now)
  }
  for(let i = 0; i < rightNav.length; i++){
    rightNav[i].onclick = ()=>{
      old = now
      now = i
      contentMove(now)
    }
  }
  function contentMove(no){
    now = no
    navItemDown.forEach(ele => {
      ele.style.width = ""
    });
    rightNav.forEach(ele => {
      ele.className = " "
    })
    rightNav[now].className = 'active'
    let centerD = navItemUp[no].offsetWidth / 2 - arrow.offsetWidth / 2
    navItemDown[no].style.width = "100%"
    arrow.style.left = no * liDetial.offsetWidth + centerD + "px"
    // 移动内容块
    contentView.style.transform = 'translateY(-' + contentMain[0].offsetHeight * no + 'px)'
    animation[old].out()
    animation[now].in()
  }
  
})()





