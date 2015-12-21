'use strict';

const electron = require(`electron`);
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

electron.crashReporter.start();

let mainWindow = null;

app.on(`window-all-closed`, () => {
  if (process.platform != `darwin`) {
    app.quit();
  }
});

app.on(`ready`, () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const template = [
    {
      label: `File`,
      submenu: [
        {
          label: `Open`,
          accelerator: `Ctrl+O`
        },
        {
          label: `Close`,
          accelerator: `Ctrl+W`,
          role: `close`
        },
        { type: `separator` },
        {
          label: `Save`,
          accelerator: `Ctrl+S`
        },
        {
          label: `Save As...`,
          accelerator: `Shift+Ctrl+S`
        },
        { type: `separator` },
        {
          label: `Quit`,
          accelerator: `Ctrl+Q`,
          role: `close`
        }
      ]
    },
    { label: `Edit` },
    { label: `View` },
    { label: `Go` },
    { label: `Capture` },
    { label: `Analyze` },
    { label: `Statistics` },
    { label: `Telephony` },
    { label: `Tools` },
    { label: `Internals` },
    { label: `Help` }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on(`closed`, () => {
    mainWindow = null;
  });
});
