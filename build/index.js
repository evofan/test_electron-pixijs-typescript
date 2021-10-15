"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require('path');
let mainWindow;
electron_1.app.on("ready", () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 640,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(`${__dirname}/preload.js`)
        },
    });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
electron_1.app.on("window-all-closed", () => {
    electron_1.app.quit();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXlFO0FBRXpFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUk1QixJQUFJLFVBQWtDLENBQUM7QUFFdkMsY0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDN0IsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxJQUFJO1FBQ2YsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLElBQUk7WUFFckIsZ0JBQWdCLEVBQUUsS0FBSztZQUd2QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsYUFBYSxDQUFDO1NBQzlDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RCxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFXLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUN2QyxjQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAgYXMgRWxlY3Ryb25BcHAsIEJyb3dzZXJXaW5kb3csIGlwY1JlbmRlcmVyfSBmcm9tIFwiZWxlY3Ryb25cIjtcbi8vIGltcG9ydCB7IGlwY1JlbmRlcmVyLyosIHJlbW90ZSAqL30gZnJvbSAnZWxlY3Ryb24nO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuLy9pbXBvcnQgKiBhcyBQSVhJIGZyb20gXCJwaXhpLmpzXCI7XG4vL2NvbnNvbGUubG9nKFwiUElYSVwiKTtcblxubGV0IG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5cbkVsZWN0cm9uQXBwLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdpZHRoOiAxMjgwLFxuICAgIGhlaWdodDogNjQwLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLCAvLyBmYWxzZSxcbiAgICAgIC8vIHByZWxvYWQ6IGAuL3ByZWxvYWQuanNgLFxuICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2UsXG4gICAgICAvLyBlbmFibGVSZW1vdGVNb2R1bGU6IHRydWUsXG5cbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihgJHtfX2Rpcm5hbWV9L3ByZWxvYWQuanNgKVxuICAgIH0sXG4gIH0pO1xuICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vYXBwL2luZGV4Lmh0bWxgKTtcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgbWFpbldpbmRvdy5vbihcImNsb3NlZFwiLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xufSk7XG5cbkVsZWN0cm9uQXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xuICBFbGVjdHJvbkFwcC5xdWl0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNyYyJ9
