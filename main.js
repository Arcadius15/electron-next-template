const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

console.log(isDev)
function createWindow() {
    // Crea una ventana de navegador
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
  
    
    win.webContents.openDevTools(true);
    // Carga la página de tu aplicación de Next.js en la ventana de navegador
    win.loadURL(
      isDev
        ? 'http://localhost:3000/'
        : `file://${path.join(__dirname, '../build/index.html')}`
    );
  }

  app.on('ready', createWindow);