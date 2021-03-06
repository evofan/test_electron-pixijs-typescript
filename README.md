# electron-pixijs-typescript and spine(pixi-spine)
Sample of using Electron, Pixi.JS and Spine and TypeScript to make a game app that runs on browser and on desktop.  

original:  
[https://github.com/Mkalo/electron-pixijs-typescript](https://github.com/Mkalo/electron-pixijs-typescript)  

**DEMO**  
   
   
Web:  
<img src="https://evofan.github.io/test_electron-pixijs-typescript/screenshot/pic_by_browser.jpg" width="50%">   
[https://evofan.github.io/test_electron-pixijs-typescript/build/app/index.html](https://evofan.github.io/test_electron-pixijs-typescript/build/app/index.html)  

Electron:  
<img src="https://evofan.github.io/test_electron-pixijs-typescript/screenshot/pic_by_electron.jpg" width="50%">   

Installer: Releases / latest  
<img src="https://evofan.github.io/test_electron-pixijs-typescript/screenshot/pic_exec.jpg" width="50%"> <img src="https://evofan.github.io/test_electron-pixijs-typescript/screenshot/pic_inst1.jpg" width="25%">      

**Usage**  
```
npm install
npm run build
npm start
```
You can also build your app to work on a web browser using.  
`npm run web`  

Make Installer(for Windows)  
`electron-builder --win --x64`  

　  
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

**Electron | Build cross-platform desktop apps with JavaScript, HTML, and CSS.**  
[https://www.electronjs.org/](https://www.electronjs.org/)  

■ Uncaught ReferenceError: require is not defined  
**Electron 12.0.0 'Require' is not defined #463 electron/electron-quick-start**  
[https://github.com/electron/electron-quick-start/issues/463](https://github.com/electron/electron-quick-start/issues/463)  
>webPreferences: {
>	nodeIntegration: true,
>	contextIsolation: false
>}

■ Uncaught Error: Cannot find module  
**electron-builderで「Error: Cannot find module 」が出る場合について | Sysrigar**  
[https://sysrigar.com/2019/11/23/electron-builder%E3%81%A7%E3%80%8Cerror-cannot-find-module-%E3%80%8D%E3%81%8C%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AB%E3%81%A4%E3%81%84/](https://sysrigar.com/2019/11/23/electron-builder%E3%81%A7%E3%80%8Cerror-cannot-find-module-%E3%80%8D%E3%81%8C%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AB%E3%81%A4%E3%81%84/)  
>本件エラーは electron-builder の導入先への指定がおかしいため生じていました。  

npm i -D electron-builderを追加  

**electornで作成した実行ファイル(app/exe)を実行すると「Error: Cannot find module ～」が発生 | Tech Memo**  
[https://tech.shiroshika.com/electorn-error-cannot-find-module/](https://tech.shiroshika.com/electorn-error-cannot-find-module/)  
>package.jsonの「dependencies」にパッケージの記載がない   

dependenciesにエラーが出たモジュールを追加  

■ The 'mode' option has not been set, webpack will fallback to 'production' for this value.  
<img src="https://evofan.github.io/test_electron-pixijs-typescript/screenshot/pic_warning_mode.png" width="50%">   
**Webpack 4を使ってみたらビルド時に[WARNING]が出たので**  
[https://qiita.com/MasanoriIwakura/items/32f9be227adab21d7f87](https://qiita.com/MasanoriIwakura/items/32f9be227adab21d7f87)  
>"scripts": {  
>  "dev": "webpack --mode development",  
>  "build": "webpack --mode production"  
>}  
>  
>開発時  
>npm run dev  
>本番時  
>npm run build  


**webpack4には"--mode"オプションが必須らしい**  
[https://www.te-nu.com/entry/2018/03/22/100000](https://www.te-nu.com/entry/2018/03/22/100000)  
>development  
>開発ツールに対応  
>インクリメンタルビルド  
>ログが親切  
>  
>production  
>サイズが小さい  
>開発には不親切  


**npx webpackコマンドで警告が表示されてしまう件**  
[https://jumbomonaca.hatenablog.com/entry/2019/04/04/104604](https://jumbomonaca.hatenablog.com/entry/2019/04/04/104604)  
>module.exports = {  
>  mode: "production",  
>  entry: path.resolve(__dirname, 'main.js'),  
>  output: {  
>    filename: 'app.js',  
>    path: path.resolve(__dirname, './')  
>  }  
>};  
  
