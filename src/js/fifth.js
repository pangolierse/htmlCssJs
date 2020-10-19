(()=>{
  let teamView = document.querySelector('#team .bottom .teammate ul')
  let myCanvas = document.querySelector('#team #my-canvas')
  let liMan = [...teamView.children].slice(0,8)
  let arr = []

  let bobbleTimer = null
  let createBobble = null

  teamView.parentNode.onmouseleave = function(){
    liMan.forEach(element => {
      element.style.opacity = 1
      myCanvas.style.visibility = 'hidden'
    });
    cancelAnimationFrame(bobbleTimer)
    clearInterval(createBobble)
  }
  for(let i = 0; i < liMan.length; i++){
    liMan[i].onmouseenter = function(){
      cancelAnimationFrame(bobbleTimer)
      clearInterval(createBobble)
      liMan.forEach(element => {
        element.style.opacity = 0.2
      });
      this.style.opacity = 1
      myCanvas.style.visibility = 'visible'
      myCanvas.style.left = this.offsetLeft+ teamView.offsetLeft + 'px';
      floatBubble()
    }
  }

  function floatBubble() {
    /** @type {HTMLCanvasElement} */
    let ctx = myCanvas.getContext('2d')
    //绘制
    function animate(){
      ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
      ctx.save()
      for(let i = 0; i < arr.length; i++){
        let node = arr[i]
        node.deg += 6
        node.x = node.startX + Math.sin(node.deg*Math.PI/180) *node.step*5
        node.y = node.startY - (node.deg*Math.PI/180) *node.step*2
        if(node.y < 0){
          arr.splice(i,1)
        }
        ctx.fillStyle = `rgb(${node.red},${node.green},${node.blue})`
        ctx.beginPath()
        ctx.arc(node.x,node.y,node.r,0,2*Math.PI)
        ctx.fill()
      }
      ctx.restore()
      bobbleTimer = requestAnimationFrame(animate)
    }
    bobbleTimer = requestAnimationFrame(animate)
    createBobble = setInterval(()=>{
        createRct()
    },30)
    //随机生成圆形
    function createRct(){
      let x = Math.random()*myCanvas.width
      let y = myCanvas.height
      let r = Math.random()*8
      let step = Math.random()*10 + 12
      let red = Math.round(Math.random()*255)
      let blue = Math.round(Math.random()*255)
      let green = Math.round(Math.random()*255)
      let startX = x
      let startY = y
      let deg = 0
      arr.push({
        x,
        y,
        r,
        red,
        blue,
        green,
        startX,
        startY,
        deg,
        step
      })
    }
  }








})()