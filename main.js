const { app, BrowserWindow } = require("electron");
function createWindow() {
  const win = new BrowserWindow({ width: 480, height: 860, autoHideMenuBar: true, title: "Signal Lab Live",
    webPreferences: { contextIsolation: true } });
  win.loadFile("www/index.html");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
