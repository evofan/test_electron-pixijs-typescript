/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\r\nconst pixi_spine_1 = __webpack_require__(/*! pixi-spine */ \"pixi-spine\");\r\nconst setText_1 = __webpack_require__(/*! ./setText */ \"./app/setText.ts\");\r\nconst WIDTH = 1280;\r\nconst HEIGHT = 640;\r\nconst BG_COLOR = 0x000000;\r\nconst renderer = new PIXI.Renderer({\r\n    width: WIDTH,\r\n    height: HEIGHT,\r\n    backgroundColor: BG_COLOR,\r\n});\r\ndocument.body.appendChild(renderer.view);\r\nconst stage = new PIXI.Container();\r\nlet position = 0;\r\nlet background;\r\nlet background2;\r\nlet foreground;\r\nlet foreground2;\r\nlet text_libVersion;\r\nlet text_instruct;\r\nlet oldTime = Date.now();\r\nlet ms = 1000;\r\nlet animate = () => {\r\n    let newTime = Date.now();\r\n    let deltaTime = newTime - oldTime;\r\n    oldTime = newTime;\r\n    deltaTime < 0 ? (deltaTime = 0) : deltaTime;\r\n    deltaTime > ms ? (deltaTime = ms) : deltaTime;\r\n    renderer.render(stage);\r\n    requestAnimationFrame(animate);\r\n    position += 10;\r\n    background.x = -(position * 0.6);\r\n    background.x %= 1286 * 2;\r\n    if (background.x < 0) {\r\n        background.x += 1286 * 2;\r\n    }\r\n    background.x -= 1286;\r\n    background2.x = -(position * 0.6) + 1286;\r\n    background2.x %= 1286 * 2;\r\n    if (background2.x < 0) {\r\n        background2.x += 1286 * 2;\r\n    }\r\n    background2.x -= 1286;\r\n    foreground.x = -position;\r\n    foreground.x %= 1286 * 2;\r\n    if (foreground.x < 0) {\r\n        foreground.x += 1286 * 2;\r\n    }\r\n    foreground.x -= 1286;\r\n    foreground2.x = -position + 1286;\r\n    foreground2.x %= 1286 * 2;\r\n    if (foreground2.x < 0) {\r\n        foreground2.x += 1286 * 2;\r\n    }\r\n    foreground2.x -= 1286;\r\n};\r\nlet loader = new PIXI.Loader();\r\nconst ASSET_SP = \"assets/spine/alien-pro.json\";\r\nconst ASSET_BG = \"assets/images/iP4_BGtile.jpg\";\r\nconst ASSET_FG = \"assets/images/iP4_ground.png\";\r\nlet container = new PIXI.Container();\r\ncontainer.width = WIDTH;\r\ncontainer.height = HEIGHT;\r\ncontainer.x = 0;\r\ncontainer.y = 0;\r\ncontainer.pivot.x = 0.5;\r\ncontainer.pivot.y = 0.5;\r\ncontainer.interactive = true;\r\ncontainer.interactiveChildren = true;\r\ncontainer.buttonMode = false;\r\nstage.addChild(container);\r\nloader.add(\"sp_data2\", ASSET_SP);\r\nloader.add(\"bg_data\", ASSET_BG);\r\nloader.add(\"fg_data\", ASSET_FG);\r\nloader.load((loader, resources) => {\r\n    console.log(loader);\r\n    console.log(resources);\r\n    background = new PIXI.Sprite(resources.bg_data.texture);\r\n    container.addChild(background);\r\n    background2 = new PIXI.Sprite(resources.bg_data.texture);\r\n    container.addChild(background2);\r\n    foreground = new PIXI.Sprite(resources.fg_data.texture);\r\n    foreground2 = new PIXI.Sprite(resources.fg_data.texture);\r\n    foreground.anchor.set(0, 0.7);\r\n    foreground.position.y = HEIGHT;\r\n    foreground2.anchor.set(0, 0.7);\r\n    foreground2.position.y = HEIGHT;\r\n    container.addChild(foreground, foreground2);\r\n    const alien = new pixi_spine_1.Spine(resources.sp_data2.spineData);\r\n    const scale = 0.5;\r\n    alien.x = 1280 / 2;\r\n    alien.y = 580;\r\n    alien.scale.x = alien.scale.y = scale;\r\n    container.addChild(alien);\r\n    alien.stateData.setMix(\"run\", \"jump\", 0.2);\r\n    alien.stateData.setMix(\"jump\", \"run\", 0.4);\r\n    alien.state.setAnimation(0, \"run\", true);\r\n    alien.state.timeScale = 0.5;\r\n    alien.interactive = true;\r\n    alien.on(\"pointerdown\", onTouchStart);\r\n    let version = `PixiJS: ver.${PIXI.VERSION}`;\r\n    text_libVersion = (0, setText_1.setText)(version, \"Arial\", 16, 0xf0fff0, \"left\", \"normal\");\r\n    container.addChild(text_libVersion);\r\n    text_libVersion.x = 1280 / 2 - alien.width / 2;\r\n    text_libVersion.y = 50;\r\n    let instruct = \"Touch the Alien!\";\r\n    text_instruct = (0, setText_1.setText)(instruct, \"Arial\", 24, 0xffcc00, \"center\", \"bold\", \"#996600\", 4, false, \"#666666\");\r\n    container.addChild(text_instruct);\r\n    text_instruct.x = 1280 / 2 - alien.width / 2;\r\n    text_instruct.y = 100;\r\n    requestAnimationFrame(animate);\r\n});\r\nconst onTouchStart = (e) => {\r\n    console.log(\"spine obj touched\");\r\n    let obj = e.currentTarget;\r\n    obj.state.setAnimation(0, \"jump\", false);\r\n    obj.state.addAnimation(0, \"run\", true, 0);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcGl4aWpzLXR5cGVzY3JpcHQvLi9hcHAvaW5kZXgudHM/NzIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBQSVhJID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbmNvbnN0IHBpeGlfc3BpbmVfMSA9IHJlcXVpcmUoXCJwaXhpLXNwaW5lXCIpO1xyXG5jb25zdCBzZXRUZXh0XzEgPSByZXF1aXJlKFwiLi9zZXRUZXh0XCIpO1xyXG5jb25zdCBXSURUSCA9IDEyODA7XHJcbmNvbnN0IEhFSUdIVCA9IDY0MDtcclxuY29uc3QgQkdfQ09MT1IgPSAweDAwMDAwMDtcclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUElYSS5SZW5kZXJlcih7XHJcbiAgICB3aWR0aDogV0lEVEgsXHJcbiAgICBoZWlnaHQ6IEhFSUdIVCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogQkdfQ09MT1IsXHJcbn0pO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLnZpZXcpO1xyXG5jb25zdCBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5sZXQgcG9zaXRpb24gPSAwO1xyXG5sZXQgYmFja2dyb3VuZDtcclxubGV0IGJhY2tncm91bmQyO1xyXG5sZXQgZm9yZWdyb3VuZDtcclxubGV0IGZvcmVncm91bmQyO1xyXG5sZXQgdGV4dF9saWJWZXJzaW9uO1xyXG5sZXQgdGV4dF9pbnN0cnVjdDtcclxubGV0IG9sZFRpbWUgPSBEYXRlLm5vdygpO1xyXG5sZXQgbXMgPSAxMDAwO1xyXG5sZXQgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBkZWx0YVRpbWUgPSBuZXdUaW1lIC0gb2xkVGltZTtcclxuICAgIG9sZFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgZGVsdGFUaW1lIDwgMCA/IChkZWx0YVRpbWUgPSAwKSA6IGRlbHRhVGltZTtcclxuICAgIGRlbHRhVGltZSA+IG1zID8gKGRlbHRhVGltZSA9IG1zKSA6IGRlbHRhVGltZTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICBwb3NpdGlvbiArPSAxMDtcclxuICAgIGJhY2tncm91bmQueCA9IC0ocG9zaXRpb24gKiAwLjYpO1xyXG4gICAgYmFja2dyb3VuZC54ICU9IDEyODYgKiAyO1xyXG4gICAgaWYgKGJhY2tncm91bmQueCA8IDApIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLnggKz0gMTI4NiAqIDI7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kLnggLT0gMTI4NjtcclxuICAgIGJhY2tncm91bmQyLnggPSAtKHBvc2l0aW9uICogMC42KSArIDEyODY7XHJcbiAgICBiYWNrZ3JvdW5kMi54ICU9IDEyODYgKiAyO1xyXG4gICAgaWYgKGJhY2tncm91bmQyLnggPCAwKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDIueCArPSAxMjg2ICogMjtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQyLnggLT0gMTI4NjtcclxuICAgIGZvcmVncm91bmQueCA9IC1wb3NpdGlvbjtcclxuICAgIGZvcmVncm91bmQueCAlPSAxMjg2ICogMjtcclxuICAgIGlmIChmb3JlZ3JvdW5kLnggPCAwKSB7XHJcbiAgICAgICAgZm9yZWdyb3VuZC54ICs9IDEyODYgKiAyO1xyXG4gICAgfVxyXG4gICAgZm9yZWdyb3VuZC54IC09IDEyODY7XHJcbiAgICBmb3JlZ3JvdW5kMi54ID0gLXBvc2l0aW9uICsgMTI4NjtcclxuICAgIGZvcmVncm91bmQyLnggJT0gMTI4NiAqIDI7XHJcbiAgICBpZiAoZm9yZWdyb3VuZDIueCA8IDApIHtcclxuICAgICAgICBmb3JlZ3JvdW5kMi54ICs9IDEyODYgKiAyO1xyXG4gICAgfVxyXG4gICAgZm9yZWdyb3VuZDIueCAtPSAxMjg2O1xyXG59O1xyXG5sZXQgbG9hZGVyID0gbmV3IFBJWEkuTG9hZGVyKCk7XHJcbmNvbnN0IEFTU0VUX1NQID0gXCJhc3NldHMvc3BpbmUvYWxpZW4tcHJvLmpzb25cIjtcclxuY29uc3QgQVNTRVRfQkcgPSBcImFzc2V0cy9pbWFnZXMvaVA0X0JHdGlsZS5qcGdcIjtcclxuY29uc3QgQVNTRVRfRkcgPSBcImFzc2V0cy9pbWFnZXMvaVA0X2dyb3VuZC5wbmdcIjtcclxubGV0IGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5jb250YWluZXIud2lkdGggPSBXSURUSDtcclxuY29udGFpbmVyLmhlaWdodCA9IEhFSUdIVDtcclxuY29udGFpbmVyLnggPSAwO1xyXG5jb250YWluZXIueSA9IDA7XHJcbmNvbnRhaW5lci5waXZvdC54ID0gMC41O1xyXG5jb250YWluZXIucGl2b3QueSA9IDAuNTtcclxuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuY29udGFpbmVyLmludGVyYWN0aXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG5jb250YWluZXIuYnV0dG9uTW9kZSA9IGZhbHNlO1xyXG5zdGFnZS5hZGRDaGlsZChjb250YWluZXIpO1xyXG5sb2FkZXIuYWRkKFwic3BfZGF0YTJcIiwgQVNTRVRfU1ApO1xyXG5sb2FkZXIuYWRkKFwiYmdfZGF0YVwiLCBBU1NFVF9CRyk7XHJcbmxvYWRlci5hZGQoXCJmZ19kYXRhXCIsIEFTU0VUX0ZHKTtcclxubG9hZGVyLmxvYWQoKGxvYWRlciwgcmVzb3VyY2VzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkZXIpO1xyXG4gICAgY29uc29sZS5sb2cocmVzb3VyY2VzKTtcclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUocmVzb3VyY2VzLmJnX2RhdGEudGV4dHVyZSk7XHJcbiAgICBjb250YWluZXIuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcbiAgICBiYWNrZ3JvdW5kMiA9IG5ldyBQSVhJLlNwcml0ZShyZXNvdXJjZXMuYmdfZGF0YS50ZXh0dXJlKTtcclxuICAgIGNvbnRhaW5lci5hZGRDaGlsZChiYWNrZ3JvdW5kMik7XHJcbiAgICBmb3JlZ3JvdW5kID0gbmV3IFBJWEkuU3ByaXRlKHJlc291cmNlcy5mZ19kYXRhLnRleHR1cmUpO1xyXG4gICAgZm9yZWdyb3VuZDIgPSBuZXcgUElYSS5TcHJpdGUocmVzb3VyY2VzLmZnX2RhdGEudGV4dHVyZSk7XHJcbiAgICBmb3JlZ3JvdW5kLmFuY2hvci5zZXQoMCwgMC43KTtcclxuICAgIGZvcmVncm91bmQucG9zaXRpb24ueSA9IEhFSUdIVDtcclxuICAgIGZvcmVncm91bmQyLmFuY2hvci5zZXQoMCwgMC43KTtcclxuICAgIGZvcmVncm91bmQyLnBvc2l0aW9uLnkgPSBIRUlHSFQ7XHJcbiAgICBjb250YWluZXIuYWRkQ2hpbGQoZm9yZWdyb3VuZCwgZm9yZWdyb3VuZDIpO1xyXG4gICAgY29uc3QgYWxpZW4gPSBuZXcgcGl4aV9zcGluZV8xLlNwaW5lKHJlc291cmNlcy5zcF9kYXRhMi5zcGluZURhdGEpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSAwLjU7XHJcbiAgICBhbGllbi54ID0gMTI4MCAvIDI7XHJcbiAgICBhbGllbi55ID0gNTgwO1xyXG4gICAgYWxpZW4uc2NhbGUueCA9IGFsaWVuLnNjYWxlLnkgPSBzY2FsZTtcclxuICAgIGNvbnRhaW5lci5hZGRDaGlsZChhbGllbik7XHJcbiAgICBhbGllbi5zdGF0ZURhdGEuc2V0TWl4KFwicnVuXCIsIFwianVtcFwiLCAwLjIpO1xyXG4gICAgYWxpZW4uc3RhdGVEYXRhLnNldE1peChcImp1bXBcIiwgXCJydW5cIiwgMC40KTtcclxuICAgIGFsaWVuLnN0YXRlLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCB0cnVlKTtcclxuICAgIGFsaWVuLnN0YXRlLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgIGFsaWVuLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIGFsaWVuLm9uKFwicG9pbnRlcmRvd25cIiwgb25Ub3VjaFN0YXJ0KTtcclxuICAgIGxldCB2ZXJzaW9uID0gYFBpeGlKUzogdmVyLiR7UElYSS5WRVJTSU9OfWA7XHJcbiAgICB0ZXh0X2xpYlZlcnNpb24gPSAoMCwgc2V0VGV4dF8xLnNldFRleHQpKHZlcnNpb24sIFwiQXJpYWxcIiwgMTYsIDB4ZjBmZmYwLCBcImxlZnRcIiwgXCJub3JtYWxcIik7XHJcbiAgICBjb250YWluZXIuYWRkQ2hpbGQodGV4dF9saWJWZXJzaW9uKTtcclxuICAgIHRleHRfbGliVmVyc2lvbi54ID0gMTI4MCAvIDIgLSBhbGllbi53aWR0aCAvIDI7XHJcbiAgICB0ZXh0X2xpYlZlcnNpb24ueSA9IDUwO1xyXG4gICAgbGV0IGluc3RydWN0ID0gXCJUb3VjaCB0aGUgQWxpZW4hXCI7XHJcbiAgICB0ZXh0X2luc3RydWN0ID0gKDAsIHNldFRleHRfMS5zZXRUZXh0KShpbnN0cnVjdCwgXCJBcmlhbFwiLCAyNCwgMHhmZmNjMDAsIFwiY2VudGVyXCIsIFwiYm9sZFwiLCBcIiM5OTY2MDBcIiwgNCwgZmFsc2UsIFwiIzY2NjY2NlwiKTtcclxuICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0X2luc3RydWN0KTtcclxuICAgIHRleHRfaW5zdHJ1Y3QueCA9IDEyODAgLyAyIC0gYWxpZW4ud2lkdGggLyAyO1xyXG4gICAgdGV4dF9pbnN0cnVjdC55ID0gMTAwO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG59KTtcclxuY29uc3Qgb25Ub3VjaFN0YXJ0ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3BpbmUgb2JqIHRvdWNoZWRcIik7XHJcbiAgICBsZXQgb2JqID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgb2JqLnN0YXRlLnNldEFuaW1hdGlvbigwLCBcImp1bXBcIiwgZmFsc2UpO1xyXG4gICAgb2JqLnN0YXRlLmFkZEFuaW1hdGlvbigwLCBcInJ1blwiLCB0cnVlLCAwKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/index.ts\n");

/***/ }),

/***/ "./app/setText.ts":
/*!************************!*\
  !*** ./app/setText.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setText = void 0;\r\nconst PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\r\nconst setText = (message, fontfamily = \"Arial\", fontsize = 12, fillcolor = 0xffffff, strokecolor = \"#000000\", sthickness = 0, isShadow = false, shadowcolor = \"#000000\") => {\r\n    return new PIXI.Text(`${message}`, {\r\n        fontFamily: fontfamily,\r\n        fontSize: fontsize,\r\n        fill: fillcolor,\r\n        stroke: strokecolor,\r\n        strokeThickness: sthickness,\r\n        dropShadow: isShadow,\r\n        dropShadowColor: shadowcolor,\r\n        lineJoin: \"round\"\r\n    });\r\n};\r\nexports.setText = setText;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2V0VGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcGl4aWpzLXR5cGVzY3JpcHQvLi9hcHAvc2V0VGV4dC50cz9mZmQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2V0VGV4dCA9IHZvaWQgMDtcclxuY29uc3QgUElYSSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xyXG5jb25zdCBzZXRUZXh0ID0gKG1lc3NhZ2UsIGZvbnRmYW1pbHkgPSBcIkFyaWFsXCIsIGZvbnRzaXplID0gMTIsIGZpbGxjb2xvciA9IDB4ZmZmZmZmLCBzdHJva2Vjb2xvciA9IFwiIzAwMDAwMFwiLCBzdGhpY2tuZXNzID0gMCwgaXNTaGFkb3cgPSBmYWxzZSwgc2hhZG93Y29sb3IgPSBcIiMwMDAwMDBcIikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQSVhJLlRleHQoYCR7bWVzc2FnZX1gLCB7XHJcbiAgICAgICAgZm9udEZhbWlseTogZm9udGZhbWlseSxcclxuICAgICAgICBmb250U2l6ZTogZm9udHNpemUsXHJcbiAgICAgICAgZmlsbDogZmlsbGNvbG9yLFxyXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlY29sb3IsXHJcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBzdGhpY2tuZXNzLFxyXG4gICAgICAgIGRyb3BTaGFkb3c6IGlzU2hhZG93LFxyXG4gICAgICAgIGRyb3BTaGFkb3dDb2xvcjogc2hhZG93Y29sb3IsXHJcbiAgICAgICAgbGluZUpvaW46IFwicm91bmRcIlxyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMuc2V0VGV4dCA9IHNldFRleHQ7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/setText.ts\n");

/***/ }),

/***/ "pixi-spine":
/*!*****************************!*\
  !*** external "pixi-spine" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("pixi-spine");

/***/ }),

/***/ "pixi.js":
/*!**************************!*\
  !*** external "pixi.js" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("pixi.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.ts");
/******/ 	
/******/ })()
;