const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const { EventEmitter } = require('node:events');

var eventEmitter = new EventEmitter();

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
        }
    })
    win.loadFile('main.html')
    // win.addListener("maximize", ()=>{
    //     win.webContents.send("max");
    // })
    // win.addListener("unmaximize", ()=>{
    //     win.webContents.send("min");
    // })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})