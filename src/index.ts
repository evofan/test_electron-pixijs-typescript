import { app as ElectronApp, BrowserWindow, ipcRenderer} from "electron";
// import { ipcRenderer/*, remote */} from 'electron';
const path = require('path')
//import * as PIXI from "pixi.js";
//console.log("PIXI");

let mainWindow: Electron.BrowserWindow;

ElectronApp.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 640,
    resizable: true,
    webPreferences: {
      nodeIntegration: true, // false,
      // preload: `./preload.js`,
      contextIsolation: false,
      // enableRemoteModule: true,

      preload: path.join(`${__dirname}/preload.js`)
    },
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

ElectronApp.on("window-all-closed", () => {
  ElectronApp.quit();
});
