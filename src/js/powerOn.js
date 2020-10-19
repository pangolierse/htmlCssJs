import animation from "./moveInOut";
import {lunboStart} from "./lunbo";
(()=>{
  let mask = document.getElementById('mask')
  let line = document.querySelector('#mask .line')
  let masks = document.getElementsByName('mask')
  loadEvent()
  function loadEvent(){
    let arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
    let flag =0;
    for(let i=0;i<arr.length;i++){
      let img = new Image();
      img.src="./src/img/"+arr[i];
        img.onload=function(){
          flag++;
          line.style.width = flag/arr.length*100+"%";
      }
    }
    
    line.addEventListener('transitionend',function(){
      this.style.display = 'none'
      if(flag == arr.length){
        masks[0].style.height = 0
        masks[1].style.height = 0
      }
    })
    masks[0].addEventListener('transitionend',function(){
      mask.remove()
      animation[0].begin()
      setTimeout(function(){
        animation[0].in()
        lunboStart()
      },500)
    })
  }
})()