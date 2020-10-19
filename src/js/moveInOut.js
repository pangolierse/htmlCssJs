
  export default [
    {
      lunboAnimateEle: document.getElementsByName('lunboAnimateEle'),
      begin:function(){
        this.lunboAnimateEle[0].style.transform = 'translateY(-700px)'
        this.lunboAnimateEle[0].style.display = 'block'
        this.lunboAnimateEle[1].style.display = 'flex';
      },
      in:function(){
        [...this.lunboAnimateEle].forEach(ele => {
          ele.style.transform = 'translateY(0)'
          ele.style.opacity = 1
        });
      },
      out:function(){
        this.lunboAnimateEle[0].style.transform = 'translateY(-400px)'
        this.lunboAnimateEle[0].style.opacity = .3
        this.lunboAnimateEle[1].style.transform = 'translateY(150px)'
        this.lunboAnimateEle[1].style.opacity = .3
      }
    },
    {
      plane : document.getElementsByName('plane'),
      in:function(){
        [...this.plane].forEach(ele => {
          ele.style.transform = 'translate(0,0)'
        });
      },
      out:function(){
        this.plane[0].style.transform = 'translate(-100px,-200px)'
        this.plane[1].style.transform = 'translate(-200px,300px)'
        this.plane[2].style.transform = 'translate(100px,-100px)'
      }
    },
    {
      pen : document.getElementsByName('pen'),
      in:function(){
        [...this.pen].forEach(ele => {
          ele.style.transform = 'translate(0,0)'
        });
      },
      out:function(){
        this.pen[0].style.transform = 'translate(-100px,-200px)'
        this.pen[1].style.transform = 'translate(-200px,100px)'
        this.pen[2].style.transform = 'translate(100px,-100px)'
      }
    },
    {
      pictureBox: document.getElementsByClassName('picture-box'),
      in:function(){
        [...this.pictureBox].forEach(ele => {
          ele.style.transform = 'rotate(0)'
        });
      },
      out:function(){
        this.pictureBox[0].style.transform = 'rotate(45deg)'
        this.pictureBox[1].style.transform = 'rotate(-45deg)'
      }
    },
    {
      textContent: document.getElementsByName('text-content'),
      in:function(){
        this.textContent.forEach( ele => {
          ele.style.transform = 'translate(0,0)'
        })
      },
      out:function(){
        this.textContent[0].style.transform = 'translate(-200px,0)'
        this.textContent[1].style.transform = 'translate(200px,0)'
      }
    }
  ]
  