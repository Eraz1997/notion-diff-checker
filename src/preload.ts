// https://stackoverflow.com/questions/39979098/how-to-take-screenshot-of-full-webpage-in-electron-app

import { toJpeg } from 'html-to-image';

type InjectedWindow = Window &
  typeof globalThis & {
    htmlToImage: {
      toJpeg: unknown;
    };
  };

if (window) {
  (window as InjectedWindow).htmlToImage = {
    toJpeg
  };
}
