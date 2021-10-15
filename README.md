# electron-pixijs-typescript and spine(pixi-spine)
Sample using Electron, Pixi.JS and Spine and TypeScript to make a game app that runs on browser and on desktop.  

**DEMO**  
Web:  
<img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_by_browser.jpg" width="50%">   
[https://evofan.github.io/electron-pixijs-typescript/build/app/index.html](https://evofan.github.io/electron-pixijs-typescript/build/app/index.html)  

Electron:  
<img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_by_electron.jpg" width="50%">   

Installer: Releases / dist_20201008.zip  
<img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_exec.jpg" width="50%"> <img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_inst1.jpg" width="25%">      

**How to use it**  
```
npm install
npm run build
npm start
```
You can also build your app to work on a web browser using.  
`npm run web`  

Make Installer  
`npm i -g electron-builder`  
`electron-builder --win --x64`  

 **Update library**(2021/01)  
~~~  
 @types/node        ^14.11.2  →  ^14.14.21
 electron            ^10.1.3  →    ^11.2.0
 gulp-sourcemaps      ^2.6.5  →     ^3.0.0
 pixi-spine          ^2.1.10  →    ^2.1.11
 pixi.js              ^5.3.3  →     ^5.3.7
 source-map-loader    ^1.0.0  →     ^2.0.0
 ts-loader            ^8.0.4  →    ^8.0.14
 typescript           ^4.0.3  →     ^4.1.3
 webpack             ^4.44.2  →    ^5.15.0
 webpack-stream       ^6.1.0  →     ^6.1.1
 ~~~  

**Update library**(2020/10)  
~~~  
 @types/node              ^11.11.3  →  ^14.11.2
 @types/pixi.js             ^4.8.6  →    ^5.0.0
 del                        ^4.0.0  →    ^6.0.0
 electron                   ^4.0.8  →   ^10.1.3
 gulp                       ^4.0.0  →    ^4.0.2
 gulp-typescript            ^5.0.0  →    ^5.0.1
 merge2                     ^1.2.3  →    ^1.4.1
 minimist                   ^1.2.3  →    ^1.2.5
 pixi.js                    ^4.8.6  →    ^5.3.3
 ts-loader                  ^5.3.3  →    ^8.0.4
 tslint                    ^5.13.1  →    ^6.1.3
 typescript              ^3.3.3333  →    ^4.0.3
 webpack                   ^4.29.6  →   ^4.44.2
 webpack-node-externals     ^1.7.2  →    ^2.5.2
 webpack-stream             ^5.2.1  →    ^6.1.0
 ~~~  
 
 ---

reference  

**PixiJS Examples Pixie**  
[https://pixijs.io/examples/#/plugin-spine/pixie.js](https://pixijs.io/examples/#/plugin-spine/pixie.js)  
Uses background material and script, fairy is unused for spine ver 3.7.  

**Example: Alien**  
[http://ja.esotericsoftware.com/spine-examples-alien](http://ja.esotericsoftware.com/spine-examples-alien)  
Because spine ver 3.8 or higher is required.  

or use other branch.  
>PixiJS Spine plugin supports only format for Spine 3.8. Your model has version 3.3.07.  
>Please look in pixi-spine repository README for another branch.  

**electron 5.0.0 “Uncaught ReferenceError: require is not defined”**  
[https://stackoverflow.com/questions/55093700/electron-5-0-0-uncaught-referenceerror-require-is-not-defined](https://stackoverflow.com/questions/55093700/electron-5-0-0-uncaught-referenceerror-require-is-not-defined)  
>nodeIntegration: true

**ReferenceError: PIXI is not defined · Issue #47 · pixijs/pixi-projection**  
[https://github.com/pixijs/pixi-projection/issues/47](https://github.com/pixijs/pixi-projection/issues/47)  

**pixijs/pixi-spine**  
[https://github.com/pixijs/pixi-spine](https://github.com/pixijs/pixi-spine)  
>Basic Example  

**Creating a desktop application from scratch with Electron and building / releasing it using electron-builder.**  
(Electronで1からデスクトップアプリを作り、electron-builderを使ってビルド・リリースするまで - Qiita)  
[https://qiita.com/saki-engineering/items/203892838e15b3dbd300](https://qiita.com/saki-engineering/items/203892838e15b3dbd300)  

memo  
erased glup lint...  
nodeIntegration security ok?  

**Electron | Build cross-platform desktop apps with JavaScript, HTML, and CSS.**  
[https://www.electronjs.org/](https://www.electronjs.org/)  

(Uncaught ReferenceError: require is not defined)  
**Electron 12.0.0 'Require' is not defined #463 electron/electron-quick-start**  
[https://github.com/electron/electron-quick-start/issues/463](https://github.com/electron/electron-quick-start/issues/463)  
>webPreferences: {
>	nodeIntegration: true,
>	contextIsolation: false
>}

(Uncaught Error: Cannot find module)  
**electron-builderで「Error: Cannot find module 」が出る場合について | Sysrigar**  
[https://sysrigar.com/2019/11/23/electron-builder%E3%81%A7%E3%80%8Cerror-cannot-find-module-%E3%80%8D%E3%81%8C%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AB%E3%81%A4%E3%81%84/](https://sysrigar.com/2019/11/23/electron-builder%E3%81%A7%E3%80%8Cerror-cannot-find-module-%E3%80%8D%E3%81%8C%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AB%E3%81%A4%E3%81%84/)  
>本件エラーは electron-builder の導入先への指定がおかしいため生じていました。
npm i -D electron-builderを追加  

**electornで作成した実行ファイル(app/exe)を実行すると「Error: Cannot find module ～」が発生 | Tech Memo**  
[https://tech.shiroshika.com/electorn-error-cannot-find-module/](https://tech.shiroshika.com/electorn-error-cannot-find-module/)  
>package.jsonの「dependencies」にパッケージの記載がない  
dependenciesにエラーが出たモジュールを追加  



