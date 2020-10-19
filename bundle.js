/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/fifth.js":
/*!*************************!*\
  !*** ./src/js/fifth.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(()=>{\r\n  let teamView = document.querySelector('#team .bottom .teammate ul')\r\n  let myCanvas = document.querySelector('#team #my-canvas')\r\n  let liMan = [...teamView.children].slice(0,8)\r\n  let arr = []\r\n\r\n  let bobbleTimer = null\r\n  let createBobble = null\r\n\r\n  teamView.parentNode.onmouseleave = function(){\r\n    liMan.forEach(element => {\r\n      element.style.opacity = 1\r\n      myCanvas.style.visibility = 'hidden'\r\n    });\r\n    cancelAnimationFrame(bobbleTimer)\r\n    clearInterval(createBobble)\r\n  }\r\n  for(let i = 0; i < liMan.length; i++){\r\n    liMan[i].onmouseenter = function(){\r\n      cancelAnimationFrame(bobbleTimer)\r\n      clearInterval(createBobble)\r\n      liMan.forEach(element => {\r\n        element.style.opacity = 0.2\r\n      });\r\n      this.style.opacity = 1\r\n      myCanvas.style.visibility = 'visible'\r\n      myCanvas.style.left = this.offsetLeft+ teamView.offsetLeft + 'px';\r\n      floatBubble()\r\n    }\r\n  }\r\n\r\n  function floatBubble() {\r\n    /** @type {HTMLCanvasElement} */\r\n    let ctx = myCanvas.getContext('2d')\r\n    //绘制\r\n    function animate(){\r\n      ctx.clearRect(0,0,myCanvas.width,myCanvas.height)\r\n      ctx.save()\r\n      for(let i = 0; i < arr.length; i++){\r\n        let node = arr[i]\r\n        node.deg += 6\r\n        node.x = node.startX + Math.sin(node.deg*Math.PI/180) *node.step*5\r\n        node.y = node.startY - (node.deg*Math.PI/180) *node.step*2\r\n        if(node.y < 0){\r\n          arr.splice(i,1)\r\n        }\r\n        ctx.fillStyle = `rgb(${node.red},${node.green},${node.blue})`\r\n        ctx.beginPath()\r\n        ctx.arc(node.x,node.y,node.r,0,2*Math.PI)\r\n        ctx.fill()\r\n      }\r\n      ctx.restore()\r\n      bobbleTimer = requestAnimationFrame(animate)\r\n    }\r\n    bobbleTimer = requestAnimationFrame(animate)\r\n    createBobble = setInterval(()=>{\r\n        createRct()\r\n    },30)\r\n    //随机生成圆形\r\n    function createRct(){\r\n      let x = Math.random()*myCanvas.width\r\n      let y = myCanvas.height\r\n      let r = Math.random()*8\r\n      let step = Math.random()*10 + 12\r\n      let red = Math.round(Math.random()*255)\r\n      let blue = Math.round(Math.random()*255)\r\n      let green = Math.round(Math.random()*255)\r\n      let startX = x\r\n      let startY = y\r\n      let deg = 0\r\n      arr.push({\r\n        x,\r\n        y,\r\n        r,\r\n        red,\r\n        blue,\r\n        green,\r\n        startX,\r\n        startY,\r\n        deg,\r\n        step\r\n      })\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n})()\n\n//# sourceURL=webpack:///./src/js/fifth.js?");

/***/ }),

/***/ "./src/js/first.js":
/*!*************************!*\
  !*** ./src/js/first.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moveInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveInOut */ \"./src/js/moveInOut.js\");\n\r\n\r\n// 头部导航点击切换效果实现\r\n(() => {\r\n  //头部导航栏元素获取\r\n  let arrow = document.querySelector('#head .head-main .arrow')\r\n  let headNavFItem = document.querySelectorAll('#head .head-main .head-nav > li')\r\n  let headNavItem = document.querySelectorAll('#head .head-main .head-nav > li a')\r\n  let rightNav = document.querySelectorAll('#content .right-nav li')\r\n  let navItemUp = document.querySelectorAll('#head .head-main .head-nav > li a > .up')\r\n  let navItemDown = document.querySelectorAll('#head .head-main .head-nav > li a > .down')\r\n  // 主题内容获取\r\n  let contentView = document.querySelector('#content .list ')\r\n  let contentMain = document.querySelectorAll('#content .list > li')\r\n  //当前页面参数\r\n  let now = 0\r\n  let old = 0\r\n  //滚动定时\r\n  let scrollTimer = null\r\n  let liDetial = headNavFItem[0]\r\n  //初始化页面状态\r\n  _moveInOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(ele => {\r\n    ele.out()\r\n  });\r\n\r\n  for(let i = 0; i < headNavItem.length; i++){\r\n    let node = headNavItem[i]\r\n    node.onclick = () => {\r\n      contentMove(i)\r\n    }\r\n  }\r\n  // headNavItem[0].click()\r\n  contentView.addEventListener('DOMMouseScroll', function(ev){\r\n    clearTimeout(scrollTimer)\r\n    scrollTimer = setTimeout(()=>{\r\n      fn(ev)\r\n    },200)\r\n  })\r\n  contentView.onmousewheel = function(ev){\r\n    clearTimeout(scrollTimer)\r\n    scrollTimer = setTimeout(()=>{\r\n      fn(ev)\r\n    },200)\r\n  }\r\n  function fn(ev){\r\n    let dir\r\n    if(ev.wheelDelta)\r\n      dir = ev.wheelDelta > 0? 'up':'down'\r\n    else if(ev.detail) \r\n      dir = ev.detail < 0? 'up':'down'\r\n    old = now\r\n    switch(dir){\r\n      case 'up':\r\n        now = now <= 0 ? 0:--now\r\n        break;\r\n      case 'down':\r\n        now = now >= contentMain.length-1 ? contentMain.length-1 : ++now\r\n        break;\r\n    }\r\n    contentMove(now)\r\n  }\r\n  window.onresize = ()=>{\r\n    contentMove(now)\r\n  }\r\n  for(let i = 0; i < rightNav.length; i++){\r\n    rightNav[i].onclick = ()=>{\r\n      old = now\r\n      now = i\r\n      contentMove(now)\r\n    }\r\n  }\r\n  function contentMove(no){\r\n    now = no\r\n    navItemDown.forEach(ele => {\r\n      ele.style.width = \"\"\r\n    });\r\n    rightNav.forEach(ele => {\r\n      ele.className = \" \"\r\n    })\r\n    rightNav[now].className = 'active'\r\n    let centerD = navItemUp[no].offsetWidth / 2 - arrow.offsetWidth / 2\r\n    navItemDown[no].style.width = \"100%\"\r\n    arrow.style.left = no * liDetial.offsetWidth + centerD + \"px\"\r\n    // 移动内容块\r\n    contentView.style.transform = 'translateY(-' + contentMain[0].offsetHeight * no + 'px)'\r\n    _moveInOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"][old].out()\r\n    _moveInOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"][now].in()\r\n  }\r\n  \r\n})()\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/first.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./first */ \"./src/js/first.js\")\r\n__webpack_require__(/*! ./fifth */ \"./src/js/fifth.js\")\r\n__webpack_require__(/*! ./lunbo */ \"./src/js/lunbo.js\")\r\n__webpack_require__(/*! ./powerOn */ \"./src/js/powerOn.js\")\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lunbo.js":
/*!*************************!*\
  !*** ./src/js/lunbo.js ***!
  \*************************/
/*! exports provided: lunboStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lunboStart\", function() { return lunboStart; });\nlet lunboStart = (()=>{\r\n  let lunboItem = document.querySelectorAll('#home .lunbo .content li')\r\n  let lunboBtn = document.querySelectorAll('#home .lunbo .btn li')\r\n  let lunbo = lunboItem[0].parentNode\r\n  let nowPage = 0\r\n  let oldPage = 0\r\n  let lunboTimer = null\r\n\r\n  lunbo.onmouseenter = function(){\r\n    lunboStop()\r\n  }\r\n  lunbo.onmouseleave = function(){\r\n    lunboStart()\r\n  }\r\n  function lunboStart(){\r\n    clearInterval(lunboTimer)\r\n    lunboTimer = setInterval(function(){\r\n      oldPage = nowPage\r\n      switchPage(nowPage+1)\r\n    }, 2000)\r\n  }\r\n  for(let i = 0; i < lunboBtn.length; i++){\r\n    lunboBtn[i].onclick = function(){\r\n      clearClassName(lunboBtn)\r\n      lunboStop(lunboStart)\r\n      lunboBtn[i].className='active'\r\n      switchPage(i,(confirmDirection(nowPage,i)))\r\n      \r\n    }\r\n  }\r\n  function lunboStop(callBack){\r\n    clearInterval(lunboTimer)\r\n    callBack && callBack()\r\n  }\r\n  function switchPage (nextPage, direction = 1) {\r\n    nextPage = nextPage % lunboItem.length\r\n    switch (direction) {\r\n      case 1:\r\n        lunboItem[nowPage].className = 'left-hide'\r\n        lunboItem[nextPage].className = 'right-show active'\r\n        break;\r\n      case -1:\r\n        lunboItem[nowPage].className = 'right-hide'\r\n        lunboItem[nextPage].className = 'left-show active'\r\n        break;\r\n    }\r\n    clearClassName(lunboBtn)\r\n    lunboBtn[nextPage].className = 'active'\r\n    nowPage = nextPage \r\n  }\r\n  function clearClassName (eles) {\r\n    for(let i = 0; i < eles.length; i++){\r\n      eles[i].className = ''\r\n    }\r\n  }\r\n  function confirmDirection(prev,now){\r\n    return now>prev ? 1:(prev == now ? 0 : -1)\r\n  }\r\n  return lunboStart\r\n})()\r\n\n\n//# sourceURL=webpack:///./src/js/lunbo.js?");

/***/ }),

/***/ "./src/js/moveInOut.js":
/*!*****************************!*\
  !*** ./src/js/moveInOut.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    {\r\n      lunboAnimateEle: document.getElementsByName('lunboAnimateEle'),\r\n      begin:function(){\r\n        this.lunboAnimateEle[0].style.transform = 'translateY(-700px)'\r\n        this.lunboAnimateEle[0].style.display = 'block'\r\n        this.lunboAnimateEle[1].style.display = 'flex';\r\n      },\r\n      in:function(){\r\n        [...this.lunboAnimateEle].forEach(ele => {\r\n          ele.style.transform = 'translateY(0)'\r\n          ele.style.opacity = 1\r\n        });\r\n      },\r\n      out:function(){\r\n        this.lunboAnimateEle[0].style.transform = 'translateY(-400px)'\r\n        this.lunboAnimateEle[0].style.opacity = .3\r\n        this.lunboAnimateEle[1].style.transform = 'translateY(150px)'\r\n        this.lunboAnimateEle[1].style.opacity = .3\r\n      }\r\n    },\r\n    {\r\n      plane : document.getElementsByName('plane'),\r\n      in:function(){\r\n        [...this.plane].forEach(ele => {\r\n          ele.style.transform = 'translate(0,0)'\r\n        });\r\n      },\r\n      out:function(){\r\n        this.plane[0].style.transform = 'translate(-100px,-200px)'\r\n        this.plane[1].style.transform = 'translate(-200px,300px)'\r\n        this.plane[2].style.transform = 'translate(100px,-100px)'\r\n      }\r\n    },\r\n    {\r\n      pen : document.getElementsByName('pen'),\r\n      in:function(){\r\n        [...this.pen].forEach(ele => {\r\n          ele.style.transform = 'translate(0,0)'\r\n        });\r\n      },\r\n      out:function(){\r\n        this.pen[0].style.transform = 'translate(-100px,-200px)'\r\n        this.pen[1].style.transform = 'translate(-200px,100px)'\r\n        this.pen[2].style.transform = 'translate(100px,-100px)'\r\n      }\r\n    },\r\n    {\r\n      pictureBox: document.getElementsByClassName('picture-box'),\r\n      in:function(){\r\n        [...this.pictureBox].forEach(ele => {\r\n          ele.style.transform = 'rotate(0)'\r\n        });\r\n      },\r\n      out:function(){\r\n        this.pictureBox[0].style.transform = 'rotate(45deg)'\r\n        this.pictureBox[1].style.transform = 'rotate(-45deg)'\r\n      }\r\n    },\r\n    {\r\n      textContent: document.getElementsByName('text-content'),\r\n      in:function(){\r\n        this.textContent.forEach( ele => {\r\n          ele.style.transform = 'translate(0,0)'\r\n        })\r\n      },\r\n      out:function(){\r\n        this.textContent[0].style.transform = 'translate(-200px,0)'\r\n        this.textContent[1].style.transform = 'translate(200px,0)'\r\n      }\r\n    }\r\n  ]);\r\n  \n\n//# sourceURL=webpack:///./src/js/moveInOut.js?");

/***/ }),

/***/ "./src/js/powerOn.js":
/*!***************************!*\
  !*** ./src/js/powerOn.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moveInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveInOut */ \"./src/js/moveInOut.js\");\n/* harmony import */ var _lunbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunbo */ \"./src/js/lunbo.js\");\n\r\n\r\n(()=>{\r\n  let mask = document.getElementById('mask')\r\n  let line = document.querySelector('#mask .line')\r\n  let masks = document.getElementsByName('mask')\r\n  loadEvent()\r\n  function loadEvent(){\r\n    let arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];\r\n    let flag =0;\r\n    for(let i=0;i<arr.length;i++){\r\n      let img = new Image();\r\n      img.src=\"./src/img/\"+arr[i];\r\n      img.onload=function(){\r\n        flag++;\r\n        line.style.width = flag/arr.length*100+\"%\";\r\n      }\r\n    }\r\n    line.addEventListener('transitionend',function(){\r\n      this.style.display = 'none'\r\n      if(flag == arr.length){\r\n        masks[0].style.height = 0\r\n        masks[1].style.height = 0\r\n      }\r\n    })\r\n    masks[0].addEventListener('transitionend',function(){\r\n      mask.remove()\r\n      _moveInOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].begin()\r\n      setTimeout(function(){\r\n        _moveInOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].in()\r\n        Object(_lunbo__WEBPACK_IMPORTED_MODULE_1__[\"lunboStart\"])()\r\n      },500)\r\n    })\r\n  }\r\n})()\n\n//# sourceURL=webpack:///./src/js/powerOn.js?");

/***/ }),

/***/ "./src/less/index.less":
/*!*****************************!*\
  !*** ./src/less/index.less ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/less/index.less?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.onload = ()=>{\r\n  __webpack_require__(/*! ./js/index */ \"./src/js/index.js\")\r\n  __webpack_require__(/*! ./less/index.less */ \"./src/less/index.less\")\r\n\r\n  \r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });