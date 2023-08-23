import { app, BrowserWindow, BrowserView } from 'electron';
import { join } from 'path';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 100,
    height: 200,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });

  const headerView = new BrowserView();
  const contentView = new BrowserView();
  mainWindow.addBrowserView(headerView);
  mainWindow.addBrowserView(contentView);
  headerView.setBounds({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  headerView.setAutoResize({
    horizontal: true,
  });
  headerView.webContents.loadURL(`file:///${join(__dirname, 'headerView.html')}`);
  contentView.setBounds({
    x: 0,
    y: 100,
    width: 100,
    height: 100,
  });
  contentView.setAutoResize({
    horizontal: true,
    height: true,
  });
  contentView.webContents.loadURL('https://www.notion.so');
  mainWindow.maximize();
  mainWindow.show();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
